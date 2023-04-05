import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";

export const CurrentUserCard = ({ currentUser, setCurrentUser}) => {
    let getCurrentUser = JSON.parse(localStorage.getItem("currentUser")) || []
    console.log(getCurrentUser[0].firstName)
    return(
        <Card id="card" key={getCurrentUser.id} variant="outlined" sx={{ 
            width: 1/4,
            m: 1}}
            style={{
                display: "flex", 
                boxShadow: "-1px 20px 30px -5px rgb(32, 32, 32)",
                position: "relative",
                flexWrap: "wrap"
            }}>
            <CardContent style={{ 
                background: '#c5d5cb', 
                display: "flex",
                flexDirection: 'column', 
                justifyContent: 'space-evenly'}}
                sx={{width: 3/5}}>
                <Typography sx={{ fontSize: 14, width: 1 }} color="black" gutterBottom>
                    {getCurrentUser[0].firstName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="black">
                    Elo: {getCurrentUser[0].elo}
                </Typography>
                
            </CardContent>
            
            <CardContent style={{ 
                background: '#9fa8a3', 
                display: "flex",
                flexDirection: 'column', 
                justifyContent: 'space-evenly'}}
                sx={{
                    width: 2/5}}>
                <Typography top="0" sx={{ mb: 1, width: 1}} color="black">
                    Win: {getCurrentUser[0].win}
                </Typography>
                <Typography sx={{ mb: 1 }} color="black">
                    Loss: {getCurrentUser[0].loss}
                </Typography>
            </CardContent>
            <Container style={{
                position: "absolute",
                bottom: 0,
                left: "-5%",
            }}> </Container>
        </Card>
    );
}