import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Tag, Tooltip, Typography } from "antd";
import React, { useState } from "react";

interface DetailItem {
  title: string;
  assignee: string;
  priority: string;
  assigneeCount: number;
}
interface TicketDetailsProps {
  details: DetailItem[]; // Array of DetailItem
}
const TicketDetails: React.FC<TicketDetailsProps> = ({ details }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Row gutter={16}>
      {details?.map((item) => (
        <Col>
          <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            bordered={false}
            style={{
              width: 200,
              marginTop: "10px",
              boxShadow: isHovered
                ? " rgba(0, 0, 0, 0.35) 0px 5px 15px"
                : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              cursor: "pointer",
            }}
          >
            <Tag
              bordered={false}
              color={item?.priority === "high" ? "error" : "yellow"}
            >
              {item?.priority}
            </Tag>
            <Typography style={{ color: "grey", marginTop: "10px" }}>
              {item?.title}
            </Typography>
            <Avatar.Group
              // max={{
              //   count: item?.assigneeCount,
              //   style: { color: "#f56a00", backgroundColor: "#fde3cf" },
              // }}
              style={{ float: "right", marginTop: "10px" }}
            >
              <Avatar icon={<UserOutlined />} size="small" />

              <>
                {" "}
                <Avatar style={{ backgroundColor: "#f56a00" }} size="small">
                  K
                </Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                    size="small"
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                  size="small"
                />
              </>
            </Avatar.Group>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TicketDetails;
