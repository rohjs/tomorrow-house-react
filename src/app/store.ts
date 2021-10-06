import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import auth from './auth'
import modal from './modal'
import searchHistory from './searchHistory'
import system from './system'
import toast from './toast'

import productDetail from './product/detail'
import productCheckout from './product/checkout'

export const store = configureStore({
  reducer: {
    auth,
    modal,
    searchHistory,
    system,
    toast,
    productDetail,
    productCheckout,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
