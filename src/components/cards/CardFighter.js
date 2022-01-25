import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FIGHTERS } from '../../db/fighters';
import DialogFighter from '../modals/DialogFighter';
import { useSelector } from 'react-redux';
import { selectKingdom } from '../../redux/kingdom';

export default function CardFighter({ id, localIndex, name }) {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const kingdom = useSelector(selectKingdom);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const folder = kingdom.id;

    if (!kingdom) return null;

    return (
        <>
            <DialogFighter open={open} handleClose={handleClose}
                fighter={{
                    name: 'asasas',
                    height: kingdom.heights[localIndex] * 2,
                    desc: 'asasasas',
                    id
                }}
            />
            <Box sx={{ display: 'flex', cursor: 'pointer' }}>
                <Box
                    component="img"
                    sx={{ height: kingdom.heights[localIndex], width: 'auto' }}
                    src={`/fighters/${folder}/${name}.png`}
                    alt={id}
                    onClick={handleOpen}
                />
                {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {FIGHTERS[id].name}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            {FIGHTERS[id].desc}
                        </Typography>
                    </CardContent>
                </Box> */}
            </Box>
        </>
    );
}
