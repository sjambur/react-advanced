export const reducer = (state, action) => {
  let newPeople = [];
  switch (action.type) {
    case "addItem":
      newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "item added",
      };

    case "noItem":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "please enter value",
      };

    case "closeModal":
      return {
        ...state,
        isModalOpen: false,
      };

    case "removeItem":
      newPeople = state.people.filter((person) => person.id !== action.payload);
      return {
        ...state,
        people: newPeople,
      };

    default:
      return state;
  }
};
