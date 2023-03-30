import React, { useState } from "react";
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

  return (
    <ItemsContext.Provider value={{ items, setItems, activeId }}>
      <DndContext
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
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <SingleSkill id={items.indexOf(activeId)} skill={activeId} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </ItemsContext.Provider>
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
