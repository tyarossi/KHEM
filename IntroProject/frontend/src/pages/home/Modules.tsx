import React from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';

const Modules = (): JSX.Element => (
	<Container>
        <Box
            marginTop='30px'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '50vh',
            }}>
            <FormControl>
                <FormLabel id="module-choice">
                    <Typography variant='h3' >Choose a Module</Typography>
                </FormLabel>
                <RadioGroup
                    aria-labelledby='module-choice'
                    defaultValue="Balancing Equations"
                    name="module-choice-group"
                >
                    <FormControlLabel value="Balancing Equations" control={<Radio />} label="Balancing Equations" />
                    <FormControlLabel value="Equalibrium" control={<Radio />} label="Equalibrium" />
                    <FormControlLabel value="Kinesthetics" control={<Radio />} label="Kinesthetics" />
                    <FormControlLabel value="Electrochemistry" control={<Radio />} label="Electrochemistry" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="help-choice">
                    <Typography variant='h3' >Choose a Option</Typography>
                </FormLabel>
                <RadioGroup
                    aria-labelledby='help-choice'
                    defaultValue="Help"
                    name="help-choice-group"
                >
                    <FormControlLabel value="Help" control={<Radio />} label="Get Help with an Equation" />
                    <FormControlLabel value="Quiz" control={<Radio />} label="Take a Quiz" />
                </RadioGroup>
            </FormControl>
        <Button
            variant="contained"
            style={{maxWidth: '80px'}}>
                Submit
            </Button>
        </Box>
	</Container>
);
export default Modules;
