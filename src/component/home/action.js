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
} from "./constant";
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