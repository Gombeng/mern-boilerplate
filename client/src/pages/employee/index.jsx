import { Row, Tabs } from "antd";
import { fetchData } from "../../utils/apifethcer";
import { useEffect, useState } from "react";
import TableComponent from "../../components/table";
import CardComponent from "../../components/card";

const EmployeeTable = ({ data, error }) => {
  return (
    <div>{error ? "Error loading data" : <TableComponent data={data} />}</div>
  );
};

const Employee = () => {
  const tabLabel = ["All"];
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const uniqueRoles = [...new Set(data.map((employee) => employee.role))];
  tabLabel.push(...uniqueRoles);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData("/employees", "GET", null);
        setData(result || []);
      } catch (err) {
        setError(err.message);
      }
    };
    loadData();
  }, [activeTab]);

  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((employee) => employee.role === activeTab);

  const items = tabLabel.map((label) => ({
    label: label,
    key: label,
    children:
      activeTab === "All" ? (
        <EmployeeTable data={filteredData} error={error} />
      ) : (
        <Row gutter={[20, 20]} justify={"center"}>
          {filteredData.map((data) => (
            <CardComponent {...data} />
          ))}
        </Row>
      ),
  }));

  return (
    <div>
      <Tabs
        activeKey={activeTab}
        centered
        onChange={(key) => setActiveTab(key)}
        items={items}
      />
    </div>
  );
};

export default Employee;
