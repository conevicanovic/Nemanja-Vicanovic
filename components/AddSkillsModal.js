import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useItems } from "./SkillsContainer";
function AddSkillsModal({ isOpen, setIsOpen }) {
  const [skill, setSkill] = useState("");
  const { items, setItems, activeId } = useItems();
  function handleAddClick() {
    if (!items.includes(skill) && skill != "") {
      let newItems = items;
      newItems.push(skill);
      setItems(newItems);
      setIsOpen(false);
    } else if (skill == "") console.error("empty input");
    else console.error("already exists");
  }
  return (
    <Dialog
      as="div"
      className="relative z-10"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col justify-center items-center">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Skill:
            </Dialog.Title>
            <div className="mt-2">
              <input
                type="text"
                className="border"
                value={skill}
                onChange={(e) => {
                  setSkill(e.target.value);
                }}
              ></input>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={handleAddClick}
              >
                Add
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default AddSkillsModal;
