import ActionTypes from './actions.js';
//import './action-creator.js';

//map page
//map list
//map sublist
const INITIAL_STATE = {
    page1: [
      {
        title: "title1",
        details: ["1st", "2nd", "3rd"],
        sublist: [
          {
            title: "subtitle1",
            details: ["1st", "2nd", "3rd"],
          },
          {
            title: "subtitle2",
            details: ["1st", "2nd", "3rd"],
          },
        ],
      },
      {
          title: "title1",
          details: ["1st", "2nd", "3rd"],
          sublist: [
            {
              title: "subtitle1",
              details: ["1st", "2nd", "3rd"],
            },
            {
              title: "subtitle2",
              details: ["1st", "2nd", "3rd"],
            },

            {
              title: "subtitle2",
              details: ["1st", "2nd", "3rd"],
            },

            {
              title: "subtitle2",
              details: ["1st", "2nd", "3rd"],
            },
          ],
        },
      {
        title: "title1",
        details: ["1st", "2nd", "3rd"],
        sublist: [
          {
            title: "subtitle1",
            details: ["1st", "2nd", "3rd"],
          },
          {
            title: "subtitle2",
            details: ["1st", "2nd", "3rd"],
          },

          {
            title: "subtitle2",
            details: ["1st", "2nd", "3rd"],
          },
        ],
      },
      {
          title: "title1",
          details: ["1st", "2nd", "3rd"],
          sublist: [
            {
              title: "subtitle1",
              details: ["1st", "2nd", "3rd"],
            },
            {
              title: "subtitle2",
              details: ["1st", "2nd", "3rd"],
            },
          ],
        },
      {
        title: "title1",
        details: ["1st", "2nd", "3rd"],
        sublist: [
          {
            title: "subtitle1",
            details: ["1st", "2nd", "3rd"],
          },
          {
            title: "subtitle2",
            details: ["1st", "2nd", "3rd"],
          },
        ],
      },
      {
          title: "title1",
          details: ["1st", "2nd", "3rd"],
          sublist: [
            {
              title: "subtitle1",
              details: ["1st", "2nd", "3rd"],
            },
            {
              title: "subtitle2",
              details: ["1st", "2nd", "3rd"],
            },
          ],
        },
    ],
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