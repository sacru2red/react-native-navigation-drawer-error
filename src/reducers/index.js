import {LOGIN, LOGOUT} from '../actions/ActionTypes';

const initalState = {
  accountInfo: {},
};

export const accountReducer = (state = initalState, action) => {
  //   const {accountInfo} = state;

  switch (action.type) {
    case LOGIN:
      return {
        accountInfo: action.accountInfo,
      };

    case LOGOUT:
      return {
        accountInfo: {},
      };

    default:
      return state;
  }
};
