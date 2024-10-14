import { Card, Col, Row } from "antd";
import React from "react";

interface DetailItem {
  title: string;
  assignee: string;
  priority: string;
}
interface TicketDetailsProps {
  details: DetailItem[]; // Array of DetailItem
}
const TicketDetails: React.FC<TicketDetailsProps> = ({ details }) => {
  return (
    <Row gutter={16}>
      {details?.map((item) => (
        <Col>
          <Card bordered={false} style={{ width: 200, marginTop: "10px" }}>
            <h3>{item?.title}</h3>
            {item?.priority}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TicketDetails;
