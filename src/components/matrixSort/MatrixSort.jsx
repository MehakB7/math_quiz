import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "ITEM";

const FixedItem = ({ item }) => {
  return (
    <div className="bg-white p-2 mb-2 border border-gray-200 rounded cursor-pointer">
      {item}
    </div>
  );
};

const DroppableItem = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id: item.id, type: "droppable", index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.id !== item.id) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="bg-gray-300 p-2 mb-2 border  border-gray-200 rounded cursor-pointer"
    >
      {item.content}
    </div>
  );
};

const MatrixSort = ({ fixedItems, droppableItems, onEnd }) => {
  const moveItem = (fromIndex, toIndex) => {
    const reorderedItems = [...droppableItems];
    const [movedItem] = reorderedItems.splice(fromIndex, 1);
    reorderedItems.splice(toIndex, 0, movedItem);
    onEnd(reorderedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-2 gap-4">
        <div className=" border border-gray-300 p-4">
          {fixedItems.map((item) => (
            <FixedItem key={item.id} item={item} />
          ))}
        </div>
        <div className=" border border-gray-300 p-4">
          {droppableItems.map((item, index) => (
            <DroppableItem
              key={item.id}
              item={item}
              index={index}
              moveItem={moveItem}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default MatrixSort;
