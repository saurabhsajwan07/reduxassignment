import { call, put, takeLatest } from 'redux-saga/effects'
import {getUserData, GET_USER_DATA} from "../reducer/userReducer";
import axios from 'axios';

export function requestUserData(id){
   return axios.request({
     method: 'get',
     url: `https://swapi.dev/api/planets/${id}`,
   })
 }
 
 function* handleUserData(action) {
   try {
      const responsePromise = yield call(requestUserData, action.id);
      const response = yield responsePromise;
      yield put(getUserData(response));
   } catch (error) {
     console.log(error);
   }
 }
 
function* userSaga() {
   yield takeLatest(GET_USER_DATA, handleUserData);
 }

 export default userSaga;