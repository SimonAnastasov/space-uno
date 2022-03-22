import { configureStore } from '@reduxjs/toolkit'
import roomsReducer from './reducers/roomsReducer'
import playersReducer from './reducers/playersReducer'
import globalsReducer from './reducers/globalsReducer'

const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        players: playersReducer,
        globals: globalsReducer,
    },
})

export default store