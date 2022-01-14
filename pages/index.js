import React from 'react';
import { Box, Container, Grid, Stack, Toolbar } from '@mui/material';
import SelectKingdom from '../src/components/dropdowns/SelectKingdom';
import { useSelector } from 'react-redux';
import { selectKingdom } from '../src/redux/kingdom';
import { FIGHTERS_OF_KINGDOM } from '../src/db/fightersOfKingdom';
import CardFighter from '../src/components/cards/CardFighter';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const kingdom = useSelector(selectKingdom);

    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

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
                    return <Grid item xs={12} sm={6} md={3} key={fighterId}>
                        <CardFighter id={fighterId} />
                    </Grid>
                })
            }
        </Grid>
    </Container>
};

export default Home;