import { FC, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
export type CardType = {
  id: string;
  title: string;
  assignee: string;
  priority: string;
};

const Card: FC<CardType> = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: id,
  });
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    width: 200,
    marginTop: "10px",
    boxShadow: isHovered
      ? " rgba(0, 0, 0, 0.35) 0px 5px 15px"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    cursor: "pointer",
    padding: "10px",
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div
        id={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
