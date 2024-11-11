import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar, Card, Col } from "antd";
const { Meta } = Card;

const CardComponent = (props) => {
  return (
    <Col className="gutter-row" span={8}>
      <Card
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title={props.employeeName}
          description={props.role}
        />
      </Card>
    </Col>
  );
};
export default CardComponent;
