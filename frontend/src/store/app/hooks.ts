import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'store/store'

import * as actions from './actions'

export const useApp = () => {
  const dispatch = useAppDispatch()

  const getTinyUrl = useCallback(
    (url: string) => {
      dispatch(actions.getTinyUrl(url))
    },
    [dispatch]
  )

  const appState = useAppSelector(({ app }) => app)

  return {
    ...appState,
    getTinyUrl
  }
}
