import ActionTypes from './actions.js';
//import './action-creator.js';

const INITIAL_STATE = {
    page1: {
      list: {
        title: "this is my list title",
        details: ["1st", "2nd", "3rd"],
        sublist: [
          {
            title: "this is my 1st sublist title",
            details: ["1st", "2nd", "3rd"],
          },
          {
            title: "this is my 2nd sublist title",
            details: ["1st", "2nd", "3rd"],
          },
        ],
      },
    },
    completedList: ["first completed item"],
    inputTitleValue: "",
    inputDetailValue: "",
}

const initialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.HANDLE_TITLE_INPUT_CHANGE:
                return {
                    ...state,
                    inputTitleValue: "changed"
                }
        case ActionTypes.HANDLE_CLICK:
            return {
                ...state,
                inputTitleValue: "clicked"
            }
         default:
            return state;
    }

};

export default initialReducer;