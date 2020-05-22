//action types
export const ActionTypes = {
    HANDLE_TITLE_INPUT_CHANGE: "HANDLE_TITLE_INPUT_CHANGE",
    HANDLE_DETAIL_INPUT_CHANGE: "HANDLE_DETAIL_INPUT_CHANGE",
    HANDLE_ADD_ITEM: "HANDLE_ADD_ITEM",
    HANDLE_REMOVE_ITEM: "HANDLE_REMOVE_ITEM",
    HANDLE_EDIT_ITEM: "HANDLE_EDIT_ITEM",
    HANDLE_COMPLETE: "HANDLE_COMPLETE",
    HANDLE_INCOMPLETE: "HANDLE_INCOMPLETE",
    HANDLE_CLICK: "HANDLE_CLICK",
}
export default ActionTypes;

//action creators
export const handleTitleInputChange = (payload) => ({
    type: ActionTypes.HANDLE_TITLE_INPUT_CHANGE,
    payload
})

export const handleDetailInputChange = (payload) => ({
    type: ActionTypes.HANDLE_DETAIL_INPUT_CHANGE,
    payload
})

export const handleAddItem = (payload) => ({
    type: ActionTypes.HANDLE_ADD_ITEM,
    payload
})

export const handleRemoveItem = (payload) => ({
    type: ActionTypes.HANDLE_REMOVE_ITEM,
    payload
})

export const handleEditItem = (payload) => ({
    type: ActionTypes.HANDLE_EDIT_ITEM,
    payload
})

export const handleCompleted = (payload) => ({
    type: ActionTypes.HANDLE_COMPLETE,
    payload
})

export const handleIncomplete = (payload) => ({
    type: ActionTypes.HANDLE_INCOMPLETE,
    payload
})

export const handleClick = (payload) => ({
    type: ActionTypes.HANDLE_CLICK,
    payload
})