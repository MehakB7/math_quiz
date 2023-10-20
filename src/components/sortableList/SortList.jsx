import { useDrag, useDrop } from "react-dnd";
const ItemType = "ITEM";

export const DraggableItem = ({ item, index, moveItem, findItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id: item.id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.id !== item.id) {
        const { index: overIndex } = findItem(item.id);
        moveItem(draggedItem.index, overIndex);
        draggedItem.index = overIndex;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="bg-white p-2 mb-2 border border-gray-200 rounded cursor-pointer"
    >
      {item.content}
    </div>
  );
};
