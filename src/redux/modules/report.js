import { createAction, handleActions  } from 'redux-actions'

export const getReportRequest = createAction('GET_REPORT_REQUEST')
export const getReportResponse = createAction('GET_REPORT_RESPONSE')

export const defaultState = {
  reports: {
    loading: false,
    error: {},
    result: {}
  },
}

const reports = handleActions({
  [getReportRequest]: (state, action) => (
    {loading: true, result: {}, error: {}}
  ),
  [getReportResponse]: (state, action) => (
   {
      error: action.error,
      result: action.payload,
      loading: false
   }
  )
}, defaultState.reports)

export default reports