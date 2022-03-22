import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addRoom, changeFilter } from '../redux/reducers/roomsReducer';

import styles from '../styles/QuickNav.module.css';

import { Grid, Input, Button, Typography } from '@mui/material';
import { SearchOutlined, PlayCircleOutlineOutlined } from '@mui/icons-material';

const QuickNav = () => {
    const dispatch = useDispatch();
    const globals = useSelector(state => state.globals);

    function playWithFriends() {
        const roomName = prompt("Enter a room name");
        if (roomName) {
            const room = {
                name: roomName,
                creator: globals.player.name,
                players: 0,
            }
            dispatch(addRoom(room));
        }
    }

    function searchARoom(e) {
        dispatch(changeFilter(e.target.value));
    }

    return (
        <Grid container mt={12} justifyContent="center" alignItems="center" className={styles.container}>
            <Grid item md={4} lg={3.2}>
                <Grid container alignItems="center" justifyContent="center" className={styles.searchContainer}>
                    <SearchOutlined className={styles.searchIcon}/>
                    <Input color="primary" placeholder="search a room ..." className={styles.search} onChange={(e) => searchARoom(e)}/>
                </Grid>
            </Grid>
            <Grid item md={4} lg={3}>
                <Button color="primary" className={styles.button} onClick={() => playWithFriends()}>
                    <Typography variant="h6" mr={0.5}>
                        Play with friends
                    </Typography>
                    <PlayCircleOutlineOutlined/>
                </Button>
            </Grid>
            <Grid item md={4} lg={3}>
                <Button color="primary" className={styles.button}>
                    <Typography variant="h6" mr={0.5}>
                        Quick match
                    </Typography>
                    <PlayCircleOutlineOutlined/>
                </Button>
            </Grid>
        </Grid>
    )
}

export default QuickNav