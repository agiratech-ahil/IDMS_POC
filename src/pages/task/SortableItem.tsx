import React, { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Define the props type for SortableItem
interface SortableItemProps {
  id: string; // The id of the sortable item (unique identifier)
  children: ReactNode; // The content that will be rendered inside the sortable item
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
  const {
    attributes, // Spreadable attributes for drag and drop
    listeners, // Spreadable event listeners for drag and drop
    setNodeRef, // Ref function to connect the item to the DnD context
    transform, // Current transform applied to the item during drag
    transition, // The transition property applied during drag
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform), // Convert transform to string for CSS
    transition, // Apply the transition property (if any)
    marginBottom: 10, // Custom margin for spacing between items
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
