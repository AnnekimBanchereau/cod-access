import {
  TOGGLE_CONNECTION_VISIBILITY,
  SET_SIGN_IN_FIELD_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  SIGN_IN,
  SIGN_OUT,
  SET_INFO_USER,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  newEmail: '',
  newPseudo: '',
  newPassword: '',
  newPasswordConfirm: '',
  isVisible: false,
  isLogged: false,
  user: {
    email: '',
    pseudo: '',
    role: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CONNECTION_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case SET_SIGN_IN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SIGN_IN:
      return {
        ...state,
        isLogged: true,
        user: {
          ...state.user,
          email: action.email,
          pseudo: action.pseudo,
          role: action.role,
        },
      };
    case SIGN_OUT:
      return {
        ...state,
        isLogged: false,
      };
    case SET_INFO_USER:
      return {
        ...state,
        user: {
          [action.name]: action.newInfo,
        },
      };
    default:
      return state;
  }
};

export default reducer;
