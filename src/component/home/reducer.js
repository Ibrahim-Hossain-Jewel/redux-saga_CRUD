import {
  FETCHAPI,
  ROWDATA,
  UPDATE_VISIBLE,
  UPDATE_VISIBLE_OFF,
  UPDATE_USER_ROW_DATA,
  DELETE_ROW_DATA,
  DELETE_VISIBLE,
  DELETE_INVISIBLE,
} from "./constant";
import { fromJS } from "immutable";
//react immutable library for state container
const initialState = fromJS({
    isLoading : false,
    //when we are creating action then this automatically contains all each new data 
});

export const counterReducer = (state = initialState, action)=>{
    switch (action.type) {
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