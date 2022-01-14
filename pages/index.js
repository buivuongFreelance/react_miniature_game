import React from 'react';
import { Box, Container, Grid, Stack, Toolbar } from '@mui/material';
import SelectKingdom from '../src/components/dropdowns/SelectKingdom';
import { useSelector } from 'react-redux';
import { selectKingdom } from '../src/redux/kingdom';
import { FIGHTERS_OF_KINGDOM } from '../src/db/fightersOfKingdom';
import CardFighter from '../src/components/cards/CardFighter';

const Home = () => {
    const kingdom = useSelector(selectKingdom);

    return <Container>
        <Toolbar />
        <Stack direction="row" justifyContent="space-between">
            <Box>
                <SelectKingdom />
            </Box>
        </Stack>
        <Toolbar />
        <Grid container spacing={4}>
            {FIGHTERS_OF_KINGDOM[kingdom] &&
                FIGHTERS_OF_KINGDOM[kingdom].map(fighterId => {
                    return <Grid item xs={4} key={fighterId}>
                        <CardFighter id={fighterId} />
                    </Grid>
                })
            }
        </Grid>
    </Container>
};

export default Home;