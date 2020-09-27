
import { call, put, takeLatest } from 'redux-saga/effects'
import { apiCall } from '../service'
import {
  getReportRequest,
  getReportResponse,
} from '../modules/report'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export function * reportCall(action) {
  try {
    console.log(action.payload)
    const lng = action.payload ? action.payload.lng : process.env.REACT_APP_LONGITUDE
    const lat = action.payload ? action.payload.lat : process.env.REACT_APP_LATITUDE
    const url = `${process.env.REACT_APP_BASE_URL}lat=${lat}&lon=${lng}&exclude=${process.env.REACT_APP_PARTS}&appid=${process.env.REACT_APP_KEY}`
    const response = yield call(apiCall.getRequest, url, defaultHeaders)
    yield put(getReportResponse(response))
  } catch (error) {
    yield put(getReportResponse(error))
  }
}

export default function * saga() {
  yield takeLatest(getReportRequest, reportCall)
}