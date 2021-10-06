import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import { getRequiredOptionIds } from './detail'

interface ProductCheckoutState {
  checkouts: Record<string, number>
  active: string
}

const INITIAL_STATE: ProductCheckoutState = {
  checkouts: {},
  active: '',
}

const productCheckoutSlice = createSlice({
  name: 'product/checkout',
  initialState: INITIAL_STATE,
  reducers: {
    setCheckout: (
      state: ProductCheckoutState,
      action: PayloadAction<[number, number]>
    ) => {
      const [id, count] = action.payload
      const optionId = String(id)
      state.checkouts[optionId] = count
    },

    addCheckout: (
      state: ProductCheckoutState,
      action: PayloadAction<number>
    ) => {
      const optionId = String(action.payload)
      if (Object.keys(state.checkouts).includes(optionId)) {
        state.checkouts[optionId] += 1
      } else {
        state.checkouts[optionId] = 1
      }
    },

    deleteCheckout: (
      state: ProductCheckoutState,
      action: PayloadAction<number>
    ) => {
      const optionId = String(action.payload)
      state.checkouts[optionId] = Math.max(state.checkouts[optionId] - 1, 0)
    },
  },
})

export const { setCheckout, addCheckout, deleteCheckout } =
  productCheckoutSlice.actions
export default productCheckoutSlice.reducer

export const getCheckoutItems = (state: RootState) =>
  state.productCheckout.checkouts

export const getEnableSelectingExtraOptions = createSelector(
  [getCheckoutItems, getRequiredOptionIds],
  (checkoutItems, requiredOptionIds) => {
    const checkoutOptions = Object.keys(checkoutItems)
    let enable = false
    requiredOptionIds.forEach((id) => {
      if (checkoutOptions.includes(String(id))) enable = true
    })
    return enable
  }
)
