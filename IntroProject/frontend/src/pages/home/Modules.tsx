import React from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const Modules = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setError(false);
    };

    const { propValue } = useParams();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (value === 'BalancingEquations') {
            navigate(`/Equations/${value}`, { state: { choice: value } });
            setError(false);
        } else if (value === 'Equalibrium') {
            navigate(`/Equations/${value}`, { state: { choice: value } });
            setError(true);
        } else if (value === 'Kinesthetics') {
            navigate(`/Equations/${value}`, { state: { choice: value } });
            setError(true);
        } else if (value === 'Electrochemistry') {
            navigate(`/Equations/${value}`, { state: { choice: value } });
            setError(true);
        } else {
        setError(true);
        }
    }
    
    return(
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
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel id="module-choice">
                            <Typography variant='h3' >Choose a Module</Typography>
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby='module-choice'
                            name="module-choice-group"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="BalancingEquations" control={<Radio />} label="Balancing Equations" />
                            <FormControlLabel value="Equalibrium" disabled control={<Radio />} label="Equalibrium" />
                            <FormControlLabel value="Kinesthetics" disabled control={<Radio />} label="Kinesthetics" />
                            <FormControlLabel value="Electrochemistry" disabled control={<Radio />} label="Electrochemistry" />
                        </RadioGroup>
                        <FormLabel id="help-choice">
                            <Typography variant='h3' >Choose a Option</Typography>
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby='help-choice'
                            defaultValue="Help"
                            name="help-choice-group"
                        >
                            <FormControlLabel value="Help" control={<Radio />} label="Get Help with an Equation" />
                            <FormControlLabel value="Quiz" disabled control={<Radio />} label="Take a Quiz" />
                        </RadioGroup>
                        <Button
                            variant="contained"
                            type='submit'
                            style={{maxWidth: '80px'}}>
                                Submit
                            </Button>
                    </FormControl>
                </form>
                {value}
            </Box>
        </Container>
    );
}
export default Modules;
