import { createSlice } from '@reduxjs/toolkit'

const globals = {
    player: {
        name: '',
        email: '',
    }
}

export const globalsSlice = createSlice({
    name: 'globals',
    initialState: globals,
    reducers: {
        setPlayer: (state, action) => {
            state.player = action.payload;
        }
    }
})

export const { setPlayer } = globalsSlice.actions

export default globalsSlice.reducer