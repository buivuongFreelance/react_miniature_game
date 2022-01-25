import React, { Fragment } from 'react';
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

    const soldiers = ['titan', 'champion', 'warrior1', 'warrior2', 'warrior3'];

    return <Container>
        <Toolbar />
        <Stack direction="row" justifyContent="space-between">
            <Box>
                <SelectKingdom />
            </Box>
        </Stack>
        <Toolbar />
        {kingdom &&
            <Grid container spacing={4} sx={{ mb: 6 }}
                direction="row"
                justifyContent="center"
                alignItems="end">
                {soldiers.map((soldier, index) => {
                    const fighterId = `${kingdom.id}_${soldier}`;
                    return <Fragment key={fighterId} >
                        <Grid item xs={12} sm={6} md={4}>
                            <Stack direction={'row'} spacing={4} alignItems="end">
                                <Box sx={{
                                    borderRight: '1px solid black',
                                    height: 150,
                                }} />
                                <CardFighter id={fighterId} localIndex={index} name={soldier} />
                            </Stack>

                        </Grid>
                    </Fragment>
                })}
            </Grid>
        }
    </Container >
};

export default Home;