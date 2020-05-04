
/**
 *
 * @returns {Function}
 */
export const clearErrors = () => {
  return dispatch => {
    dispatch({type: "CLEAR_ERRORS"});
  }
};
