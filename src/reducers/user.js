export const initialState = {
  register: false,
  registerSuccess: false,
  registerError: null,

  login: false,
  loginSuccess: false,
  loginError: null,

  passwordReset: false,
  passwordResetSuccess: false,
  passwordResetError: null,

  edit: false,
  editSuccess: false,
  editError: null,

  photoUpload: false,
  photoUploadSuccess: false,
  photoUploadError: null,

  model: null,
  token: null,
};

export default function reducer(
  state = {
    ...initialState
  },
  action
) {
  switch (action.type) {
    case "USER_REGISTER":
      return {
        ...state,
        register: true,
        registerSuccess: false,
        registerError: null,
      };

    case "USER_REGISTER_FULFILLED":
      return {
        ...state,
        register: false,
        registerSuccess: true,

        model: action.data,
      };

    case "USER_REGISTER_REJECTED":
      return {
        ...state,
        register: false,
        registerSuccess: false,
        registerError: action.data,
      };

    case "USER_LOGIN":
      return {
        ...state,
        login: true,
        loginSuccess: false,
        loginError: null,
      };

    case "USER_LOGIN_FULFILLED":
      return {
        ...state,
        login: false,
        loginSuccess: true,

        model: action.data.user,
        token: action.data.token,
      };

    case "USER_LOGIN_REJECTED":
      return {
        ...state,
        login: false,
        loginSuccess: false,
        loginError: action.data,
      };

    case "USER_PASSWORD_RESET":
      return {
        ...state,
        passwordReset: true,
        passwordResetSuccess: false,
        passwordResetError: null,
      };

    case "USER_PASSWORD_RESET_FULFILLED":
      return {
        ...state,
        passwordReset: false,
        passwordResetSuccess: true,
        passwordResetError: null,
      };

    case "USER_PASSWORD_RESET_REJECTED":
      return {
        ...state,
        passwordReset: false,
        passwordResetSuccess: false,
        passwordResetError: action.data,
      };

    case "USER_PROFILE_EDIT":
      return {
        ...state,
        edit: true,
        editSuccess: false,
        editError: null,
      };

    case "USER_PROFILE_EDIT_FULFILLED":
      return {
        ...state,
        edit: false,
        editSuccess: true,

        model: action.data ? action.data : state.model,
      };

    case "USER_PROFILE_EDIT_REJECTED":
      return {
        ...state,
        edit: false,
        editSuccess: false,
        editError: action.data,
      };

    case "USER_PHOTO_UPLOAD":
      return {
        ...state,
        photoUpload: true,
        photoUploadSuccess: false,
        photoUploadError: null,
      };

    case "USER_PHOTO_UPLOAD_FULFILLED":
      return {
        ...state,
        photoUpload: false,
        photoUploadSuccess: true,

        model: action.data,
      };

    case "USER_PHOTO_UPLOAD_REJECTED":
      return {
        ...state,
        photoUpload: false,
        photoUploadSuccess: false,
        photoUploadError: action.data,
      };

    case "CLEAR_ERRORS":
      return {
        ...initialState,
        model: state.model,
        token: state.token,
      };

    case "LOGOUT":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
