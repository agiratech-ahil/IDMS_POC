import { Badge, Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import TicketDetails from "./TicketDetails";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";

const TaskCard = () => {
  const cardData = [
    {
      title: "Unassigned",
      divider: "red",
      badge: "9",
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
      divider: "green",
      badge: "6",

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
      divider: "purple",
      badge: "2",

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
      divider: "blue",
      badge: "8",

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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <Typography>{item?.title?.toUpperCase()}</Typography>
                  <Badge
                    count={item?.badge}
                    style={{ background: item?.divider }}
                  />
                </div>
                <div>
                  <PlusOutlined style={{ marginRight: "10px" }} />
                  <MoreOutlined />
                </div>
              </div>
              <Divider
                style={{
                  background: item?.divider,
                }}
              ></Divider>
              <TicketDetails details={item?.tasks} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TaskCard;
