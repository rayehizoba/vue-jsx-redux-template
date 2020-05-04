
/**
 *
 * @param email
 * @param password
 * @returns {Function}
 */
export const login = (email, password) => {
  return async dispatch => {
    dispatch({type: "USER_LOGIN"});
  }
};

/**
 *
 * @returns {Function}
 */
export const logout = () => {
  return dispatch => {
    dispatch({type: "LOGOUT"});
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const register = (data) => {
  return async dispatch => {
    dispatch({type: "USER_REGISTER"});
  }
};

/**
 *
 * @param email
 * @returns {Function}
 */
export const passwordReminder = (email) => {
  return async dispatch => {
    dispatch({type: "USER_PASSWORD_RESET"});
  }
};

/**
 *
 * @param token
 * @param email
 * @param password
 * @param password_confirmation
 * @returns {Function}
 */
export const passwordReset = (token, email, password, password_confirmation) => {
  return async dispatch => {
    dispatch({type: "USER_PASSWORD_RESET"});
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const editProfile = (data) => {
  return async dispatch => {
    dispatch({type: "USER_PROFILE_EDIT"});
  }
};

/**
 *
 * @param data
 * @returns {Function}
 */
export const uploadPhoto = (data) => {
  return dispatch => {
    dispatch({type: "USER_PHOTO_UPLOAD"});
  }
};
