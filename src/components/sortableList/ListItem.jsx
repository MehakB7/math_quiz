import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableItem } from "./SortList";

const SortableList = ({ items, onEnd }) => {
  const moveItem = (fromIndex, toIndex) => {
    const reorderedItems = [...items];
    const [movedItem] = reorderedItems.splice(fromIndex, 1);
    reorderedItems.splice(toIndex, 0, movedItem);
    onEnd(reorderedItems);
  };

  const findItem = (id) => {
    const item = items.find((item) => item.id === id);
    return {
      item,
      index: items.indexOf(item),
    };
  };

  return (
    <div className="w-1/2 mx-auto p-4 border border-gray-300">
      <DndProvider backend={HTML5Backend}>
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
            findItem={findItem}
          />
        ))}
      </DndProvider>
    </div>
  );
};

export default SortableList;
