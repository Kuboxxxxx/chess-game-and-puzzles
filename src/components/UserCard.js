import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const UserCard = ({ user }) => {


    return(
        <Card variant="outlined" sx={{ 
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
        </Card>
    );

}
