import { FC, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { Avatar, Tag, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
export type CardType = {
  id: string;
  title: string;
  assignee: string;
  priority: string;
};

const Card: FC<CardType> = ({ id, title, priority }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: id,
  });
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    width: 330,
    height: 100,
    marginTop: "10px",
    boxShadow: isHovered
      ? " rgba(0, 0, 0, 0.35) 0px 5px 15px"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    cursor: "pointer",
    padding: "10px",
    transform: CSS.Transform.toString(transform),
    borderRadius: "10px",
    background: "white",
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div
        id={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Tag bordered={false} color={priority === "high" ? "error" : "yellow"}>
          {priority}
        </Tag>
        <p style={{ marginTop: "10px" }}>{title}</p>
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
      </div>
    </div>
  );
};

export default Card;
