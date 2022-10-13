import {
  FETCHAPI,
  ROWDATA,
  UPDATE_VISIBLE,
  UPDATE_VISIBLE_OFF,
  UPDATE_USER_ROW_DATA,
  GET_POSTS,
  DELETE_ONE_USER,
  DELETE_ROW_DATA,
  DELETE_VISIBLE,
  DELETE_INVISIBLE,
  ADD_VISIBLE,
  ADD_INVISIBLE,
  SAVE_DATA_PASS,
  SAVE_RESPONSE,
  UPDATE_RESPONSE,
  DELETE_RESPONSE
} from "./constant";
export const setUpdateResponse = (updateResponse)=>{
  return {
    type: UPDATE_RESPONSE,
    updateResponse,
  };
}
export const setDeleteResponse = (deleteResponse)=>{
  console.log("lkjflksjdfl..............", deleteResponse)
  return {
    type: DELETE_RESPONSE,
    deleteResponse
  }
}
export const setSaveDataPass = (savePreparedData) =>{
  console.log("savePreparedData", savePreparedData);
  return {
    type: SAVE_DATA_PASS,
    savePreparedData,
  };
}
export const setSaveResponse = (saveResponse) =>{
  console.log("save response", saveResponse);
  return{
    type: SAVE_RESPONSE,
    saveResponse
  }
}
export const setAddVisible = ()=>{
  return{
    type: ADD_VISIBLE
  }
}
export const setAddInvisible = ()=>{
  return{
    type: ADD_INVISIBLE
  }
}
export const setFetchApiAction = (list) => {
  return {
    type: FETCHAPI,
    list,
  };
};
export const setUserRowData = (userRowData) =>{
  return {
    type: ROWDATA,
    userRowData,
  };
}
export const setUpdateDialogVisible = () => {
  return {
    type: UPDATE_VISIBLE,
  };
};
export const setUpdateDialogVisibleOff = ()=>{
  return {
    type: UPDATE_VISIBLE_OFF,
  };
}
export const setUpdateUserRowData = (submitUpdateUserRowData)=>{
  return {
    type: UPDATE_USER_ROW_DATA,
    submitUpdateUserRowData,
  };
}
export const updatePostUserRow = () =>{
  return {
    type: GET_POSTS,
  };
}
//FOR DELETE
export const deleteUserRowData = () =>{
  return {
    type: DELETE_ONE_USER
  }
}
export const setDeleteRowData = (deleteRow)=>{
  console.log("delete row data", deleteRow);
  return {
    type: DELETE_ROW_DATA,
    deleteRow
  };
}
export const setDeleteVisible = ()=>{
  return {
    type: DELETE_VISIBLE,
  };
}
export const setDeleteInvisible = ()=>{
  return {
    type: DELETE_INVISIBLE,

  };
}