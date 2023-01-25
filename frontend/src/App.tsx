import { Provider } from 'react-redux'

import { Header } from 'components/Header'
import { store } from 'store/store'
import { Home } from 'views/Home/Home'

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center w-full bg-gray-dark min-h-screen">
        <div className="flex flex-col w-full max-w-7xl px-8">
          <Header />
          <Home />
        </div>
      </div>
    </Provider>
  )
}

export default App
