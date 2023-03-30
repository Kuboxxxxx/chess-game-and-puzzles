import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  Container  from '@mui/material/Container';

import { UserCard } from "./UserCard";

const userList = JSON.parse(localStorage.getItem("userList")) || [];

export const UserList = () => {
    return(
        <Container style={{ display: "flex", marginTop: "60px"}}>
            {userList.map((item, index) => (
                <Card key={index} variant="outlined" sx={{ 
                    width: 1/4,
                    m: 1}}
                    style={{
                        display: "flex", 
                        boxShadow: "-1px 20px 30px -5px rgb(32, 32, 32)"
                    }}>
                    <CardContent style={{ 
                        background: '#c5d5cb', 
                        display: "flex",
                        flexDirection: 'column', 
                        justifyContent: 'space-evenly'}}
                        sx={{width: 3/5}}>
                        <Typography sx={{ fontSize: 14, width: 1 }} color="black" gutterBottom>
                            Name: {item.firstName}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="black">
                            Elo: {item.elo}
                        </Typography>
                        <Typography align="right" sx={{ mb: 1.5, }} color="text.secondary">
                            Win: {item.win}
                        </Typography>
                        <Typography align="right" sx={{ mb: 1.5, }} color="text.secondary">
                            Loss: {item.loss}
                        </Typography>
                    </CardContent>
                    
                    <CardContent style={{ background: '#9fa8a3', display: "flex",flexDirection: 'column', justifyContent: 'space-evenly'}}sx={{width: 2/5}}>
                        <Typography top="0" sx={{ mb: 1, width: 1}} color="black">
                            Win: {item.win}
                        </Typography>
                        <Typography sx={{ mb: 1 }} color="black">
                            Loss: {item.loss}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    )
}