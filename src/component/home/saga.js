import { put, select, call, takeLatest } from "redux-saga/effects"; 
import {
  setFetchApiAction,
  updatePostUserRow,
  setSaveResponse,
  setDeleteResponse,
  setUpdateResponse,
} from "./action";
import {
  makeSelectUpdateAbleUserData,
  makeSelectDeleteRow,
  makeSelectSaveData,
} from "./selector";
import { DELETE_ONE_USER, SAVE_DATA_PASS, UPDATE_USER_ROW_DATA } from "./constant";
export function* fetchUserName(){
  try {
    const requestUrl = "http://localhost:8082/users";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "",
      },
    };
    const res = yield call ( () => fetch(requestUrl, options));
    const resData = yield res.json();
    
    yield put(setFetchApiAction(resData));
  } catch (e) {
    console.log(e);
  }
}
export function* saveNewUser (){
  let newUserData = yield select(makeSelectSaveData());
  let basicData = {
    first_name: newUserData.first_name,
    last_name: newUserData.last_name,
    age: newUserData.age,
    occupation: newUserData.occupation
  }
  let requestUrl = "http://localhost:8082/save";
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(basicData),
  };
  try{
    let response = yield call(e => fetch(requestUrl, options));
    yield put(setSaveResponse(response))
    yield*  fetchUserName()
  }catch(e){
    console.log(e)
  }

}
// writing code for update user
export function* updateUserRowInfo (){
    const selectedRowData = yield select(makeSelectUpdateAbleUserData());
    const id = selectedRowData.id;
    const basicUpdateData = {
      id: id,
      first_name: selectedRowData.first_name,
      last_name: selectedRowData.last_name,
      age: selectedRowData.age,
      occupation: selectedRowData.occupation,
    };
      const requestURL = `http://localhost:8082/save`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(basicUpdateData),
      };
    try{
         const response = yield call((e)=>fetch(requestURL,
            options
            ));
        yield put(setUpdateResponse(response.status))
         yield* fetchUserName()
        //  const data = yield response.json();
        yield put(updatePostUserRow(response));
    }catch(e){
        console.log(e);
    }
}
export function* deleteUserRowInfo(){
    // const selectedRowData = yield select(makeSelectUpdateAbleUserData());
    const allData = yield select(makeSelectDeleteRow())
    const id = allData.id;
    const requestURL = `http://localhost:8082/delete/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(id)
    }
    try{
         const response = yield call((e) => fetch(requestURL,
            options
            ));
            yield put(setDeleteResponse(response.status));
            yield* fetchUserName();
        //  const data = yield response.json();
        yield put(updatePostUserRow(response));
        
    }catch(e){
        console.log(e);
    }
}
export function* defaultSaga() {
  yield fetchUserName();
  yield takeLatest(SAVE_DATA_PASS, saveNewUser);
  yield takeLatest(UPDATE_USER_ROW_DATA, updateUserRowInfo);
  yield takeLatest(DELETE_ONE_USER, deleteUserRowInfo);
}