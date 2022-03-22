import React from 'react'
import { useSelector } from 'react-redux'

import Room from './Room';

import styles from '../styles/Rooms.module.css';

import { Grid } from '@mui/material';

const Rooms = () => {
  let roomsInfo = useSelector(state => state.rooms);
  let rooms = roomsInfo.rooms;
  let filter = roomsInfo.filter;

  if (filter) {
    rooms = rooms.filter(room => room.name.toLowerCase().includes(filter.toLowerCase()));
  }

  if (!rooms.length) return <p style={{color: 'white'}}>No rooms created</p>;

  return (
    <Grid container columnSpacing={12} justifyContent="center" alignItems="center">
        {rooms.map((room, i) => (
            <Grid mt={8} item xs={9} sm={7} md={4.8} lg={3.1} key={i}>
                <Room room={room}/>
            </Grid>
        ))}
    </Grid>
  )
}

export default Rooms