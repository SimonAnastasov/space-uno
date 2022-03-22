import React from 'react';
import Image from 'next/image';

// import { createAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import { Grid, Box, Typography, Button } from '@mui/material';
import { PlayCircleOutlineOutlined } from '@mui/icons-material';

import styles from '../styles/Room.module.css';

const Room = ({ room }) => {
    const dispatch = useDispatch();

    if (!room) return <p style={{color: 'white'}}>Hmm</p>;

    return (
        <Grid container direction="column" justifyContent="center" alignItems="space-between" className={styles.roomContainer}>
            <Grid item className={styles.roomLogo}>
                <Image src="/images/roomLogo.png" alt="room logo" width="100" height="70"/>
            </Grid>
            <Grid item>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid mb={-6} item style={{textAlign: 'center'}}>
                        <Typography mt={-2} variant="h5" className={styles.roomName}>{room.name}</Typography>
                        <Typography mt={1} variant="body2">Created by: {room.creator}</Typography>
                        <Typography mb={2} variant="body2">Players inside: {room.players}</Typography>
                        <Button color="primary" className={styles.button}>
                            <Typography variant="body1" mr={0.5}>
                                Play in this room
                            </Typography>
                            <PlayCircleOutlineOutlined/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item mb={-9}>
                <Grid container direction="row" justifyContent="space-between" alignItems="space-between">
                    <Box className={styles.cardLeftContainer}>
                        <Image src="/images/w4.png" alt="+4" width="110" height="160" className={styles.cardLeft}/>
                    </Box>
                    <Box className={styles.cardRightContainer}>
                        <Image src="/images/w4.png" alt="+4" width="110" height="160" className={styles.cardRight}/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Room