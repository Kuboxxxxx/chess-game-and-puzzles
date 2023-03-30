import { Link } from "react-router-dom";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBackground from '../img/menuimg.jpg'

function handleClick(event) {
    event.preventDefault();
}

export const NavigationBar = () =>  {
    
    
    return (
        <div style={{ backgroundImage: `url(${ MenuBackground })`, backgroundSize: "cover", backgroundPosition: "0% 30%", backgroundRepeat: "no-repeat" }} role="presentation" onClick={handleClick}>
            <Breadcrumbs  aria-label="breadcrumb"
            sx={{ 
                border: 1,
                p: 3,
                boxShadow: 4,
                fontWeight: 'bold'
            }}
            >
                <Link to="/" style={{color: "black"}}>
                <HomeOutlinedIcon />
                </Link>
                <Link style={{ 
                    textDecoration: 'none',
                    color: 'black',  '&:hover': {
                    background: "#f00"},}}   
                    color="inherit" 
                    Link to="/playchess">
                    Play
                </Link>
                <Link style={{ textDecoration: 'none',color: 'black'}} color="inherit" Link to="/puzzles">
                    Puzzles
                </Link>
                <Link style={{ textDecoration: 'none',color: 'black'}} color="inherit" Link to="/users">
                    Users
                </Link>
            </Breadcrumbs>
        </div>
    );
}

