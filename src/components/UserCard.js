import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export const UserCard = ({ user, currentUser, setCurrentUser }) => {

    const handleSetUser = ({ setCurrentUser, user }) => {
        let userFind = user
        
        console.log(userFind)
        
    }



    return(
        <Card key={user.id} variant="outlined" sx={{ 
            width: 1/4,
            m: 1}}
            style={{
                display: "flex", 
                boxShadow: "-1px 20px 30px -5px rgb(32, 32, 32)",
                position: "relative"
            }}>
            <CardContent style={{ 
                background: '#c5d5cb', 
                display: "flex",
                flexDirection: 'column', 
                justifyContent: 'space-evenly'}}
                sx={{width: 3/5}}>
                <Typography sx={{ fontSize: 14, width: 1 }} color="black" gutterBottom>
                    {user.firstName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="black">
                    Elo: {user.elo}
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
                    Win: {user.win}
                </Typography>
                <Typography sx={{ mb: 1 }} color="black">
                    Loss: {user.loss}
                </Typography>
            </CardContent>
            <Container style={{
                position: "absolute",
                bottom: 0,
                left: "60%",
            }}> <button onClick={handleSetUser}>Select</button> <DeleteOutlineIcon/> </Container>
        </Card>
    );

}
