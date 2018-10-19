import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { ImageReducer } from './reducers'

import { RootComponent } from './components'

const rootReducer = combineReducers({
    ImageReducer
})

const store = createStore(rootReducer)

const App = () => (
    <Provider store={store}>
        <RootComponent />
    </Provider>
)

export default App