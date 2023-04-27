import React, { useState, useEffect } from "react";
import { TouchBackend } from "react-dnd-touch-backend";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import AddSkillsModal from "./AddSkillsModal";
import { SortableItem } from "./SortableItem";
import { Item } from "./Item";
import SingleSkill from "./SingleSkill";
import { createContext } from "react";
import { useContext } from "react";
const ItemsContext = createContext(null);
export function useItems() {
  return useContext(ItemsContext);
}
export default function SkillsContainer(props) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([
    "HTML",
    "CSS",
    "TAILWINDCSS",
    "JAVASCRIPT",
    "WORDPRESS",
    "REACT JS",
    "NEXT JS",
    "TYPESCRIPT",
    "GIT",
    "FIGMA",
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  useEffect(() => {
    if (activeId) {
      document.querySelector("body").style.overflow = "hidden";
    } else document.querySelector("body").style.overflow = "unset";
  }, [activeId]);
  return (
    <>
      <ItemsContext.Provider value={{ items, setItems, activeId }}>
        <DndContext
          backend={TouchBackend}
          options={{
            scrollAngleRanges: [
              { start: 30, end: 150 },
              { start: 210, end: 330 },
            ],
          }}
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {items.map((skill, id) => (
              <SortableItem
                key={id}
                id={skill}
                skill={skill}
                isEdit={props.isEdit}
              />
            ))}
            {props.isEdit && (
              <button
                className="text-5xl text-center"
                onClick={() => setAddModalOpen(true)}
              >
                +
              </button>
            )}
          </SortableContext>

          <DragOverlay>
            {activeId ? (
              <SingleSkill id={items.indexOf(activeId)} skill={activeId} />
            ) : null}
          </DragOverlay>
        </DndContext>
        <AddSkillsModal isOpen={addModalOpen} setIsOpen={setAddModalOpen} />
      </ItemsContext.Provider>
    </>
  );

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }
}
