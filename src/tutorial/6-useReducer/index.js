import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: true,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const item = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "addItem", payload: item });
      setName("");
    } else {
      dispatch({ type: "noItem" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "removeItem", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
