export type TinyUrl = {
  url: string
  slug: string
}

export interface State {
  isLoading: boolean
  history: TinyUrl[]
  error: string | null
}
