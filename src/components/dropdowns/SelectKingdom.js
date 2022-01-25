import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { KINGDOMS } from '../../db/kingdoms';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useDispatch, useSelector } from 'react-redux';
import { chooseSelectedKingdom, selectKingdom } from '../../redux/kingdom';

export default function SelectKingdom() {
    const dispatch = useDispatch();

    const [kingdom, setKingdom] = React.useState('');

    const kingdomRedux = useSelector(selectKingdom);

    useEffect(() => {
        if (kingdomRedux)
            setKingdom(kingdomRedux);
    }, [kingdomRedux])

    const handleChange = (event, value) => {
        if (value) {
            setKingdom(value);
            dispatch(chooseSelectedKingdom(value));
        }
    };

    return (
        <Autocomplete
            options={KINGDOMS.sort((a, b) => -b.belongs.localeCompare(a.belongs))}
            groupBy={(option) => option.belongs}
            id={`${kingdom.id}-select`}
            options={KINGDOMS}
            onChange={handleChange}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Kingdom" />}
        />
        // <Box sx={{ minWidth: 250 }}>
        //     <FormControl fullWidth>
        //         <InputLabel id={`${kingdom.id}-label`}>Kingdom</InputLabel>
        //         <Select
        //             labelId={`${kingdom.id}-label`}
        //             id={`${kingdom.id}-select`}
        //             value={kingdom}
        //             label="Kingdom"
        //             onChange={handleChange}
        //         >
        //             {KINGDOMS.map(kingdom => {
        //                 return <MenuItem key={kingdom.id} value={kingdom.id}>{kingdom.name}</MenuItem>
        //             })}
        //         </Select>
        //     </FormControl>
        // </Box>
    );
}
