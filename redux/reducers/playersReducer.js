import { createSlice } from '@reduxjs/toolkit'

const players = {
    players: [],
}

export const playersSlice = createSlice({
    name: 'players',
    initialState: players,
    reducers: {
        addPlayer: (state, action) => {
            const idx = state.players.indexOf(action.payload.prevPlayer);
            if (idx !== -1) {
                state.players[idx] = action.payload.player;
            }
            else {
                state.players.push(action.payload.player);
            }
        }
    }
})

export const { addPlayer } = playersSlice.actions;
export default playersSlice.reducer;