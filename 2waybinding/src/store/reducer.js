import * as actionType from "./action";
const initialState = {
  inputTxt: "",
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.TEXT_VALUE) {
    console.log("kaleee", action.entry.target.value);
    return {
      ...state,
      inputTxt: action.entry.target.value,
      counter: action.entry.target.value.length
    };
  }
  return state;
};

export default reducer;
