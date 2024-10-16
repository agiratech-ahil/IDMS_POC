import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Column, { ColumnType } from "./Column";
import { useState } from "react";
import { Button, Input, Typography } from "antd";
import {
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export default function App() {
  const data: ColumnType[] = [
    {
      id: "Column1",
      title: "To Do",
      cards: [
        {
          id: "Card1",
          title: "Bi Mail",
          assignee: "Shan",
          priority: "high",
        },
        {
          id: "Card2",
          title: "Bi Mail",
          assignee: "Shan",
          priority: "high",
        },
      ],
    },
    {
      id: "Column2",
      title: "In Progress",
      cards: [
        {
          id: "Card3",
          title: "Navbar",
          assignee: "Shan",
          priority: "medium",
        },
        {
          id: "Card4",
          title: "Task Management",
          assignee: "Shan",
          priority: "medium",
        },
      ],
    },
    {
      id: "Column3",
      title: "In Review",
      cards: [
        {
          id: "Card5",
          title: "Navbar",
          assignee: "Shan",
          priority: "medium",
        },
        {
          id: "Card6",
          title: "Task Management",
          assignee: "Shan",
          priority: "medium",
        },
      ],
    },
    {
      id: "Column4",
      title: "Done",
      cards: [
        {
          id: "Card7",
          title: "Navbar",
          assignee: "Shan",
          priority: "medium",
        },
      ],
    },
  ];
  const [columns, setColumns] = useState<ColumnType[]>(data);

  const findColumn = (unique: string | null) => {
    if (!unique) {
      return null;
    }
    if (columns.some((c) => c.id === unique)) {
      return columns.find((c) => c.id === unique) ?? null;
    }
    const id = String(unique);
    const itemWithColumnId = columns.flatMap((c) => {
      const columnId = c.id;
      return c.cards.map((i) => ({ itemId: i.id, columnId: columnId }));
    });
    const columnId = itemWithColumnId.find((i) => i.itemId === id)?.columnId;
    return columns.find((c) => c.id === columnId) ?? null;
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over, delta } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn === overColumn) {
      return null;
    }
    setColumns((prevState) => {
      const activeItems = activeColumn.cards;
      const overItems = overColumn.cards;
      const activeIndex = activeItems.findIndex((i) => i.id === activeId);
      const overIndex = overItems.findIndex((i) => i.id === overId);
      const newIndex = () => {
        const putOnBelowLastItem =
          overIndex === overItems.length - 1 && delta.y > 0;
        const modifier = putOnBelowLastItem ? 1 : 0;
        return overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      };
      return prevState.map((c) => {
        if (c.id === activeColumn.id) {
          c.cards = activeItems.filter((i) => i.id !== activeId);
          return c;
        } else if (c.id === overColumn.id) {
          c.cards = [
            ...overItems.slice(0, newIndex()),
            activeItems[activeIndex],
            ...overItems.slice(newIndex(), overItems.length),
          ];
          return c;
        } else {
          return c;
        }
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn !== overColumn) {
      return null;
    }
    const activeIndex = activeColumn.cards.findIndex((i) => i.id === activeId);
    const overIndex = overColumn.cards.findIndex((i) => i.id === overId);
    if (activeIndex !== overIndex) {
      setColumns((prevState) => {
        return prevState.map((column) => {
          if (column.id === activeColumn.id) {
            column.cards = arrayMove(overColumn.cards, activeIndex, overIndex);
            return column;
          } else {
            return column;
          }
        });
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
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
      <div
        className="App"
        style={{ display: "flex", flexDirection: "row", padding: "20px" }}
      >
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            cards={column.cards}
          ></Column>
        ))}
      </div>
    </DndContext>
  );
}
