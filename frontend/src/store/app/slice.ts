import { createSlice } from '@reduxjs/toolkit'

import { getTinyUrl } from './actions'
import { State } from './types'

const initialState: State = {
  isLoading: false,
  history: [],
  error: null
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTinyUrl.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getTinyUrl.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.history = [...state.history, payload]
      })
      .addCase(getTinyUrl.rejected, (state) => {
        state.isLoading = false
        // error handling
      })
  }
})

export const { reducer, actions } = appSlice

export default appSlice
