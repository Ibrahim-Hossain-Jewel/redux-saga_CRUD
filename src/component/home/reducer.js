import {
  FETCHAPI,
  ROWDATA,
  UPDATE_VISIBLE,
  UPDATE_VISIBLE_OFF,
  UPDATE_USER_ROW_DATA,
  DELETE_ROW_DATA,
  DELETE_VISIBLE,
  DELETE_INVISIBLE,
  ADD_VISIBLE,
  ADD_INVISIBLE,
  SAVE_DATA_PASS,
  SAVE_RESPONSE,
  DELETE_RESPONSE,
} from "./constant";
import { fromJS } from "immutable";
//react immutable library for state container
const initialState = fromJS({
    isLoading : false,
    //when we are creating action then this automatically contains all each new data 
});

export const counterReducer = (state = initialState, action)=>{
    switch (action.type) {
      case SAVE_RESPONSE: 
        return state.set("saveResponse", action.saveResponse);
      case DELETE_RESPONSE: 
        return state.set("deleteResponse", action.deleteResponse);
      case SAVE_DATA_PASS: 
        return state.set("saveUserPreparedData", action.savePreparedData);
      case ADD_VISIBLE: 
        return state.set("addVisible", true)
      case ADD_INVISIBLE: 
        return state.set("addVisible", false);
      case FETCHAPI:
        return state.set("ApiUserData", action.list);
      case ROWDATA:
        return state.set("rowData", action.userRowData);
      case UPDATE_VISIBLE:
        return state.set("updateVisibleData", true);
      case UPDATE_VISIBLE_OFF:
        return state.set("updateVisibleData", false);
      case UPDATE_USER_ROW_DATA:
        return state.set("updateAbleData", action.submitUpdateUserRowData);
        //for delete operation
      case DELETE_ROW_DATA:
        return state.set("deleteRowData", action.deleteRow);
      case DELETE_VISIBLE: 
        return state.set("deleteVisible", true)
      case DELETE_INVISIBLE: 
        return state.set("deleteVisible", false);
      default:
        return state;
    }
}