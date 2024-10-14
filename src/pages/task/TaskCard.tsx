import { Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import TicketDetails from "./TicketDetails";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";

const TaskCard = () => {
  const cardData = [
    {
      title: "Unassigned",
      tasks: [
        {
          title: "Bi Mail",
          assignee: "Shan",
          priority: "high",
        },
        {
          title: "Period",
          assignee: "Shan",
          priority: "high",
        },
      ],
    },
    {
      title: "ToDo",
      tasks: [
        {
          title: "Navbar",
          assignee: "Shan",
          priority: "high",
        },
      ],
    },
    {
      title: "In Progress",
      tasks: [
        {
          title: "Task Management",
          assignee: "Shan",
          priority: "high",
        },
      ],
    },
    {
      title: "Backlog",
      tasks: [
        {
          title: "Chat",
          assignee: "Shan",
          priority: "high",
        },
      ],
    },
  ];
  return (
    <>
      <Row gutter={16}>
        {cardData?.map((item) => (
          <Col>
            <Card
              bordered={false}
              style={{ width: 250, background: "#F5F5F7" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography style={{ fontWeight: 600 }}>
                  {item?.title?.toUpperCase()}
                </Typography>
                <div>
                  <PlusOutlined style={{ marginRight: "10px" }} />
                  <MoreOutlined />
                </div>
              </div>
              <Divider></Divider>
              <TicketDetails details={item?.tasks} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TaskCard;
