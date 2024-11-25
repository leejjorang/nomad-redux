import { configureStore, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD"); //얘 자체가 {type:'ADD', payload: } 객체 만드는 함수
// const deleteToDo = createAction("DELETE");

// // const reducer = (state = [], action) => {
// //   switch (action.type) {
// //     case addToDo.type:
// //       return [{ text: action.payload, id: Date.now() }, ...state];  //mutate하면 안됨
// //     case deleteToDo.type:
// //       return state.filter((toDo) => toDo.id !== action.payload);
// //     default:
// //       return state;
// //   }
// // };

// const reducer = createReducer([], (builder) => {
//   //createReducer에서는 state를 mutate 가능, mutate하는 경우 리턴X, 아닌 경우는 리턴
//   builder
//     .addCase(addToDo, (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteToDo, (state, action) =>
//       state.filter((toDo) => toDo.id !== action.payload)
//     );
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// export const actionCreator = {
//   addToDo,
//   deleteToDo,
// };

export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer }); //브라우저에서 redux devtool 사용

export default store;
