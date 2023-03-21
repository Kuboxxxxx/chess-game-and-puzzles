import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const UserCard = () => {
    return(
            <Card variant="outlined" sx={{ 
                width: 1/4,
                m: 1
                }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name: Worst Chess Player
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Elo: -300
                    </Typography>
                    <Typography align="right" sx={{ mb: 1.5, }} color="text.secondary">
                        Win: 0
                    </Typography>
                    <Typography align="right" sx={{ mb: 1.5, }} color="text.secondary">
                        Loss: 99
                    </Typography>
                </CardContent>
            </Card>
    );

}
