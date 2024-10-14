import React from "react";
import { Card, Col, Row } from "antd";
import TaskCard from "./TaskCard";
const TaskManagement = () => {
  return (
    <Row gutter={16}>
      <Col>
        <Card title="Card title" bordered={false}>
          <TaskCard />
        </Card>
      </Col>
      <Col>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  );
};

export default TaskManagement;
