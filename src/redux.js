const { createStore } = require("redux");

const initialState = {
  age: 21,
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.age += action.value;
  }
  if (action.type === "SUBTRACT") {
    newState.age -= action.value;
  }
  return newState;
};

const store = createStore(myReducer);

store.dispatch({ type: "ADD", value: 1 });
store.dispatch({ type: "SUBTRACT", value: 1 });

console.log(store.getState());
