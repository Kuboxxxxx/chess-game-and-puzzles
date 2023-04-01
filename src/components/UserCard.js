import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export const UserCard = ({ user, userid, currentUser, setCurrentUser, setNewUser }) => {

    const handleSetUser = () => {
        // Get the userlist from localStorage
        const checkExisting = JSON.parse(localStorage.getItem("userList")) || []
        // Take the uuid and treat it as an array
        const idAsArray = [userid]
        // Filter through userlist with the uuid 
        const result = checkExisting.filter(listObj => idAsArray.some(idObj => listObj.id === idObj ))
        // Set result in localStorage so that it auto sets on site load
        localStorage.setItem("currentUser", JSON.stringify(result))
        // Set result in to state as the current user
        setCurrentUser(result)
    }

    const handleDeleteUser = () => {
        const checkExisting = JSON.parse(localStorage.getItem("userList")) || []
        const idAsArray = [userid]
        const result = checkExisting.filter(listObj => idAsArray.some(idObj => listObj.id !== idObj ))
        localStorage.setItem("userList", JSON.stringify(result))
        setNewUser(result)
    }



    return(
        <Card key={user.id} variant="outlined" sx={{ 
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
                left: "-5%",
            }}> <button onClick={handleSetUser}><DoneOutlineIcon /></button> <button onClick={handleDeleteUser}><DeleteOutlineIcon /></button>  </Container>
        </Card>
    );

}
