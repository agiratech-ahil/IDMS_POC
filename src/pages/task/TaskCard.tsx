import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TicketDetails from "./TicketDetails"; // Your custom component

import { DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem"; // Create this component to handle drag and drop items
import { DragEndEvent } from "@dnd-kit/core";

const TaskCard = () => {
  const initialCardData = [
    {
      id: "column-unassigned", // Add a unique ID for the column
      title: "Unassigned",
      divider: "red",
      badge: "9",
      tasks: [
        {
          id: "1",
          title: "Bi Mail",
          assignee: "Shan",
          priority: "high",
          assigneeCount: 3,
        },
        {
          id: "2",
          title: "Period",
          assignee: "Shan",
          priority: "medium",
          assigneeCount: 2,
        },
      ],
    },
    {
      id: "column-todo", // Unique column ID
      title: "ToDo",
      divider: "green",
      badge: "6",
      tasks: [
        {
          id: "3",
          title: "Navbar",
          assignee: "Shan",
          priority: "medium",
          assigneeCount: 1,
        },
      ],
    },
    {
      id: "column-in-progress",
      title: "In Progress",
      divider: "purple",
      badge: "2",
      tasks: [
        {
          id: "4",
          title: "Task Management",
          assignee: "Shan",
          priority: "medium",
          assigneeCount: 3,
        },
      ],
    },
    {
      id: "column-backlog",
      title: "Backlog",
      divider: "blue",
      badge: "8",
      tasks: [],
    },
  ];

  const [cardData, setCardData] = useState(initialCardData);

  // const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return; // If no valid drop target, do nothing

    // Find the source column where the active task is located
    const activeColumnIndex = cardData.findIndex((col) =>
      col.tasks.some((task) => task.id === active.id)
    );

    // Find the destination column, either based on the task or the column's id
    const destinationColumnIndex = cardData.findIndex(
      (col) =>
        col.id === over.id || col.tasks.some((task) => task.id === over.id)
    );

    if (activeColumnIndex === -1 || destinationColumnIndex === -1) return; // Safety check

    // Handle moving within the same column
    if (activeColumnIndex === destinationColumnIndex) {
      const tasks = Array.from(cardData[activeColumnIndex].tasks);
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);

      if (oldIndex !== newIndex) {
        const updatedTasks = arrayMove(tasks, oldIndex, newIndex);
        const newCardData = [...cardData];
        newCardData[activeColumnIndex].tasks = updatedTasks;
        setCardData(newCardData);
      }
    } else {
      // Move the card to a different column
      const sourceTasks = Array.from(cardData[activeColumnIndex].tasks);
      const taskToMove = sourceTasks.find((task) => task.id === active.id);

      if (taskToMove) {
        // Remove the task from the source column
        const updatedSourceTasks = sourceTasks.filter(
          (task) => task.id !== active.id
        );

        // Add the task to the destination column
        const destinationTasks = Array.from(
          cardData[destinationColumnIndex].tasks
        );

        // Check if `over.id` is the column ID (empty column case)
        const isEmptyColumnDrop =
          over.id === cardData[destinationColumnIndex].id;

        // If it's an empty column, add the task to the end of the destination tasks
        const newIndex = isEmptyColumnDrop
          ? destinationTasks.length
          : destinationTasks.findIndex((task) => task.id === over.id);

        const updatedDestinationTasks = [
          ...destinationTasks.slice(0, newIndex),
          taskToMove,
          ...destinationTasks.slice(newIndex),
        ];

        // Update the card data state with the new column assignments
        const newCardData = [...cardData];
        newCardData[activeColumnIndex].tasks = updatedSourceTasks;
        newCardData[destinationColumnIndex].tasks = updatedDestinationTasks;

        setCardData(newCardData);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Row gutter={16}>
        {cardData.map((column) => (
          <Col key={column.id}>
            <Card
              bordered={false}
              style={{ width: 250, background: "#F5F5F7" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography style={{ fontWeight: 600, color: "grey" }}>
                  {column.title}
                </Typography>
                <Button
                  icon={<PlusOutlined />}
                  size="small"
                  style={{
                    width: "50px",
                    border: "none",
                    background: "#F5F5F7",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                />
              </div>

              {/* SortableContext to make tasks draggable, even in empty columns */}
              <SortableContext
                items={
                  column.tasks.length
                    ? column.tasks.map((task) => task.id)
                    : [column.id]
                } // Use column ID for empty columns
                strategy={verticalListSortingStrategy}
              >
                {column.tasks.length > 0 ? (
                  column.tasks.map((task) => (
                    <SortableItem key={task.id} id={task.id}>
                      <TicketDetails details={[task]} />
                    </SortableItem>
                  ))
                ) : (
                  // Show a placeholder when the column is empty to allow dropping
                  <div
                    style={{
                      padding: 10,
                      backgroundColor: "#f0f0f0",
                      minHeight: 50,
                      marginTop: "20px",
                    }}
                  >
                    <p style={{ textAlign: "center", color: "#ccc" }}>
                      No tasks
                    </p>
                  </div>
                )}
              </SortableContext>
            </Card>
          </Col>
        ))}
      </Row>
    </DndContext>
  );
};

export default TaskCard;
