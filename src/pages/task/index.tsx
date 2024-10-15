import React from "react";
import { Button, Card, Col, Input, Row, Typography } from "antd";
import TaskCard from "./TaskCard";
import {
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import CardDetails from "./CardDetails";
const TaskManagement = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          maxWidth: "90%",
        }}
      >
        <Typography
          style={{
            fontWeight: "600",

            fontSize: "25px",
            marginLeft: "20px",
          }}
        >
          All Tasks
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            // size="large"
            placeholder="Search"
            style={{ width: "100%", height: "50px" }}
            prefix={<SearchOutlined />}
          />
          <Button
            icon={<FilterOutlined />}
            size="large"
            style={{
              width: "80px",
              border: "none",
              background: "#8B93FF",
              color: "white",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "50px",
            }}
          />
          <Button
            icon={<PlusOutlined />}
            size="large"
            style={{
              width: "80px",
              border: "none",
              background: "#8B93FF",
              color: "white",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "50px",
            }}
          />
        </div>
      </div>
      <Row
        gutter={16}
        style={{
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        <Col>
          <Card
            bordered={false}
            style={{
              // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "70vh",
            }}
          >
            <TaskCard />
          </Card>
        </Col>
        <Col>
          <Card
            bordered={false}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <CardDetails />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TaskManagement;
