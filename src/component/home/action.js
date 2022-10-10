import {
  FETCHAPI,
  ROWDATA,
  UPDATE_VISIBLE,
  UPDATE_VISIBLE_OFF,
  UPDATE_USER_ROW_DATA,
  GET_POSTS,
} from "./constant";
export const setFetchApiAction = (list) => {
  // console.log(list)
  return {
    type: FETCHAPI,
    list,
  };
};
export const setUserRowData = (userRowData) =>{
  console.log("action user data", userRowData);
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
  console.log("submitUpdateUserRowData", submitUpdateUserRowData);
  return {
    type: UPDATE_USER_ROW_DATA,
    submitUpdateUserRowData,
  };
}
export const updatePostUserRow = (vale) =>{
  console.log("action ", vale)
  return {
    type: GET_POSTS,
  };
}