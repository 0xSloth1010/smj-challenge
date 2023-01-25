import { createAsyncThunk } from '@reduxjs/toolkit'

import { getAxiosInstance } from 'services/api'
import { TinyUrl } from './types'

const api = getAxiosInstance()

export const getTinyUrl = createAsyncThunk<TinyUrl, string>(
  'app/generate',
  async (url) => {
    try {
      const { data } = await api.put('/url', { url })

      return data
    } catch (err) {
      // error handling
    }
  }
)
