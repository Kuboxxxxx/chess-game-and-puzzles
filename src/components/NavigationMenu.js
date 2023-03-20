import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { Link } from "react-router-dom";

export const NavigationBar = () =>  {
    
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    </IconButton>
                    <Typography sx={{ m: 2 }} variant="h6" color="inherit" component="div">
                        <Link to="/">Home</Link>
                    </Typography>
                    <Typography sx={{ m: 2 }} variant="h6" color="inherit" component="div">
                        <Link to="/playchess">Play</Link>
                    </Typography>
                    <Typography sx={{ m: 2 }} variant="h6" color="inherit" component="div">
                        <Link to="/puzzles">Puzzles</Link>
                    </Typography>
                    <Typography sx={{ m: 2 }} variant="h6" color="inherit" component="div">
                        <Link to="/users">Users</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

