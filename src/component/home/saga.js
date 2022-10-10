import { put, select, call, takeLatest, cancel } from "redux-saga/effects"; 
import { setFetchApiAction, updatePostUserRow } from "./action";
import {
  makeSelectUpdateAbleUserData,
  makeSelectUserRowData,
} from "./selector";
import { GET_POSTS, UPDATE_USER_ROW_DATA } from "./constant";
export function* fetchUserName(loader){
    console.log("hit on fetchuser name",loader);
  try {
    const requestUrl = "http://localhost:8082/users";
    const res = yield call ( () => fetch(requestUrl));
    const resData = yield res.json();
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "",
      },
    };
    yield put(setFetchApiAction(resData));
  } catch (e) {
    console.log(e);
  }
}

// writing code for update user
export function* updateUserRowInfo (){
    console.log("hit on saga update")
    const selectedRowData = yield select(makeSelectUpdateAbleUserData());
    console.log("user provided updatee data", selectedRowData);
    console.log("selected rowdata", selectedRowData);
    const id = selectedRowData.id
    const basicUpdateData = {
    //   "id": id,
      "first_name": selectedRowData.first_name,
      "last_name": selectedRowData.last_name,
      "age": selectedRowData.age,
      "occupation": selectedRowData.occupation,
    };
      const requestURL = `http://localhost:8082/update/${id}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(basicUpdateData),
      };
    try{
         const response = yield call((e)=>fetch(requestURL,
            options
            ));
         const data = yield response.json();
         console.log("result",data);
        yield put(updatePostUserRow(response));
    }catch(e){
        console.log(e);
    }
}
export function* defaultSaga() {
  yield fetchUserName(true);
  yield takeLatest(UPDATE_USER_ROW_DATA, updateUserRowInfo);
}