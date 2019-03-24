export const FETCH_RTI_STOP_DATA_SUCCESS = 'FETCH_RTI_STOP_DATA_SUCCESS';
export const FETCH_RTI_TIMESHEET_SUCCESS = 'FETCH_RTI_TIMESHEET_SUCCESS';

export const fetchRealtimeInformationSuccess = rtiData => {
  return { type: FETCH_RTI_TIMESHEET_SUCCESS, rtiData };
};

/**
 * Get data from a specific stopId
 * @param {Number} stopNumber
 */
export const getStopData = stopNumber => {
  return dispatch => {
    dispatch(fetchRealtimeInformationSuccess(response.data));
  };
};
