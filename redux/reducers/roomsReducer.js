import { createSlice } from '@reduxjs/toolkit'

const rooms = {
    rooms: [],
    filter: '',
}

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: rooms,
    reducers: {
        addRoom: (state, action) => {
            state.rooms.push(action.payload);
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
})

export const { addRoom, changeFilter } = roomsSlice.actions

export default roomsSlice.reducer