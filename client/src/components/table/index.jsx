import { Table, Tag } from "antd";

const TableComponent = ({ data }) => {
  const columns = [
    {
      title: "Employee Id",
      key: "employeeId",
      render: (text) => {
        return (
          <>
            {text.employeeId}-{text.employeeId2}
          </>
        );
      },
    },
    {
      title: "Employee Name",
      dataIndex: "employeeName",
      key: "employeeName",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "employeeStatus",
      key: "employeeStatus",
    },
    {
      title: "Email",
      dataIndex: "employeeEmail",
      key: "employeeEmail",
    },
    {
      title: "Phone",
      dataIndex: "employeHandphone",
      key: "employeHandphone",
      render: (phone) => {
        return `+62${phone}` || "N/A";
      },
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (data) => {
        return data || "N/A";
      },
    },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive) => (
        <Tag color={isActive ? "green" : "volcano"}>
          {isActive ? "Active" : "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Admin Access",
      dataIndex: "adminAccess",
      key: "adminAccess",
      render: (adminAccess) => (adminAccess ? "Yes" : "No"),
    },
  ];

  const tableData = data.map((item, index) => ({
    key: index,
    ...item,
  }));

  return <Table columns={columns} dataSource={tableData} />;
};

export default TableComponent;
