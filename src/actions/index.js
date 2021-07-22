import * as types from './ActionTypes'

export const login = accountInfo => ({
  type: types.LOGIN,
  accountInfo
})

export const logout = () => ({
  type: types.LOGOUT
})
