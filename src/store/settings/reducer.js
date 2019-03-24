const initialState = {
  isReady: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_RTI_STOP_DATA_START:
    //   return getStopData(state);
    // case actionTypes.FETCH_RTI_STOP_DATA_SUCCESS:
    //   return fetchStopDataSuccess(state, action);
    // case actionTypes.FETCH_RTI_TIMESHEET_SUCCESS:
    //   return fetchRealtimeInformationSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
