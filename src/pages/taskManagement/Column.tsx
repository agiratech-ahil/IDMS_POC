import { FC, useState } from "react";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import Card, { CardType } from "./Card";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddCard from "./AddCard";

export type ColumnType = {
  id: string;
  title: string;
  cards: CardType[];
  //   assignee: string;
};

const Column: FC<ColumnType> = ({ id, title, cards }) => {
  const { setNodeRef } = useDroppable({ id: id });
  const [isModalOpen, setIsModalOpen] = useState([false, false]);

  const toggleModal = (idx: number, target: boolean) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  return (
    <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
      <div
        ref={setNodeRef}
        style={{
          width: "220px",
          background: "#EEEEEE",
          marginRight: "10px",
          borderRadius: "10px",
          padding: "10px",
          height: "70vh",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              // padding: "5px 20px",
              textAlign: "left",
              fontWeight: "600",
              color: "#575757",
            }}
          >
            {title?.toUpperCase()}
          </p>
          <Button
            icon={<PlusOutlined />}
            size="small"
            style={{
              width: "50px",
              border: "none",
              background: "#F5F5F7",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            onClick={() => toggleModal(0, true)}
          />
        </div>
        {cards.length ? (
          cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              assignee={card?.assignee}
              priority={card?.priority}
            />
          ))
        ) : (
          <div
            style={{
              padding: 10,
              backgroundColor: "white",
              minHeight: 50,
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >
            <p style={{ textAlign: "center", color: "#ccc" }}>No tasks</p>
          </div>
        )}
      </div>
      {isModalOpen && (
        <AddCard isModalOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </SortableContext>
  );
};

export default Column;
