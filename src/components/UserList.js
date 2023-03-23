import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  Container  from '@mui/material/Container';

import { UserCard } from "./UserCard";

const userList = JSON.parse(localStorage.getItem("userList")) || [];

export const UserList = () => {
    return(
        <Container>
            {userList.map((item, index) => (
                <Card key={index} variant="outlined" sx={{ 
                    width: 1/4,
                    m: 1
                    }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Name: {item.firstName}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Elo: {item.elo}
                        </Typography>
                        <Typography align="right" sx={{ mb: 1.5, }} color="text.secondary">
                            Win: {item.win}
                        </Typography>
                        <Typography align="right" sx={{ mb: 1.5, }} color="text.secondary">
                            Loss: {item.loss}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    )
}