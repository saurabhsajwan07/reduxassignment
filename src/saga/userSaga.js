import { call, put, takeLatest } from 'redux-saga/effects'
import {getPost, GET_POST} from "../reducer/userReducer";
import axios from 'axios';

export function requestGetPost(id){
   return axios.request({
     method: 'get',
     url: `https://swapi.dev/api/planets/${id}`,
   });
 }
 
 function* handleGetPost(action) {
   try {
      const responsePromise = yield call(requestGetPost, action.id);
      const response = yield responsePromise;
      yield put(getPost(response));
   } catch (error) {
     console.log(error);
   }
 }
 
function* userSaga() {
   yield takeLatest(GET_POST, handleGetPost);
 }

 export default userSaga;