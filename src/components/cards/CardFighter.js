import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FIGHTERS } from '../../db/fighters';
import DialogFighter from '../modals/DialogFighter';

export default function CardFighter({ id }) {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let folder = '';
    let name = '';
    if (id) {
        const arr = id.split('_');
        if (arr.length > 1) {
            folder = arr[0];
            name = arr[1];
        }
    }

    return (
        <>
            <DialogFighter open={open} handleClose={handleClose}
                fighter={{
                    name: FIGHTERS[id].name,
                    height: FIGHTERS[id].height,
                    desc: FIGHTERS[id].desc,
                    id
                }}
            />
            <Card sx={{ display: 'flex', cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    sx={{ height: 151, width: 'auto' }}
                    image={`/fighters/${folder}/${name}.png`}
                    alt={id}
                    onClick={handleOpen}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {FIGHTERS[id].name}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            {FIGHTERS[id].desc}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </>
    );
}
