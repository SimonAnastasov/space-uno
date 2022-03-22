import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPlayer } from '../redux/reducers/globalsReducer'

import Image from 'next/image';
import styles from '../styles/Header.module.css';

import { Grid, Typography } from '@mui/material';
import { HelpOutlineOutlined, OnlinePredictionOutlined, StarBorderOutlined, FaceOutlined, ChatBubbleOutlineOutlined, DisplaySettingsOutlined, LoginOutlined, LogoutOutlined } from '@mui/icons-material';

const Header = () => {
    const { data: session } = useSession();

    const dispatch = useDispatch();
    const players = useSelector(state => state.players);

    // functions
    function generateRndName() {
        const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            
        let name = 'Guest-'
        
        for (let i = 0; i < 6; i++) {
            name += alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        if (players.players && players.players.find(player => player.name === name)) {
            generateRndName();
        }
        else {
            return name;
        }
    }

    const player = {
        name: session ? session.user.name : generateRndName(),
        email: session ? session.user.email : '',
    }
    dispatch(setPlayer(player));

    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={4}>
                <Image src="/images/logo.png" alt="logo" width="300" height="120"/>
                <Typography mt={-6} ml={12} variant="body1" className={styles.name}>{player.name}</Typography>
            </Grid>
            <Grid item xs={8} justfyContent="center">
                <Grid container justifyContent="space-between" alignItems="center" mt={2} pt={1} pb={1} columnSpacing={2} className={styles.cardContainer}>
                    <Grid style={{padding: 0}} item xs={2}>
                        <HelpOutlineOutlined /><br/>
                        Rules of the game
                    </Grid>
                    <Grid item xs={2}>
                        <OnlinePredictionOutlined /><br/>
                        View online players
                    </Grid>
                    <Grid item xs>
                        <StarBorderOutlined /><br/>
                        Rankings
                    </Grid>
                    <Grid item xs>
                        <FaceOutlined /><br/>
                        Avatars
                    </Grid>
                    <Grid item xs>
                        <ChatBubbleOutlineOutlined /><br/>
                        Chat
                    </Grid>
                    <Grid item xs>
                        <DisplaySettingsOutlined /><br/>
                        Settings
                    </Grid>
                    {!session ? (
                        <Grid item xs onClick={() => signIn()}>
                            <LoginOutlined /><br/>
                            Log in
                        </Grid>
                    ) : (
                        <Grid item xs onClick={() => signOut()}>
                            <LogoutOutlined /><br/>
                            Log out
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header