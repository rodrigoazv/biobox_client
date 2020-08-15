import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = JSON.parse(localStorage.getItem("sback_cart_item"))
  ? JSON.parse(localStorage.getItem("sback_cart_item"))
  : [];

export const addItem = createAction("ADD_ITEM");
export const removeItem = createAction("REMOVE_ITEM");
export const incrementItem = createAction("INCREMENT_ITEM");
export const decrementItem = createAction("DECREMENT_ITEM");

export default createReducer(INITIAL_STATE, {
  [addItem.type]: (state, action) => [
    ...state.filter((item) => item.pid !== action.payload.pid),
    Object.assign({}, action.payload),
  ],
  [removeItem.type]: (state, action) =>
    state.filter((item) => item.pid !== action.payload),
  [incrementItem.type]: (state, action) =>
    state.map((products, index) => {
      if (index === action.payload) {
        return Object.assign({}, products, {
          quantity: products.quantity + 1,
        });
      }
      return products;
    }),
  [decrementItem.type]: (state, action) =>
    state.map((products, index) => {
      if (index === action.payload) {
        return Object.assign({}, products, {
          quantity: products.quantity - 1,
        });
      }
      return products;
    }),
});

//[...state, action.payload]
/*return Object.assign({}, state, {
    todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
  }) */
