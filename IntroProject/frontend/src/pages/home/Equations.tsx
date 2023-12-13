import React, { useState } from 'react';
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';



const Equations = (): JSX.Element => {
    const location = useLocation();
    const choice = location.state?.choice || null;
    const [letterOne, setLetterOne] = useState<string>('');
    const [letterTwo, setLetterTwo] = useState<string>('');
    const [letterThree, setLetterThree] = useState<string>('');
    const [holdOne, setHoldOne] = useState<string[][]>([['0'],['0']]);
    const [holdTwo, setHoldTwo] = useState<string[]>();
    const [holdThree, setHoldThree] = useState<string>('');
    const [checkOne, setCheckOne] = useState<number>();
    const [checkTwo, setCheckTwo] = useState<number>();
    const [textOneOne, setTextOneOne] = useState<string>('');
    const [textOneTwo, setTextOneTwo] = useState<string>('');
    const [textTwoOne, setTextTwoOne] = useState<string>('');
    const [textTwoTwo, setTextTwoTwo] = useState<string>('');

    const handleTextInputChangeOne = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLetterOne(event.target.value);
    };
    const handleTextInputChangeTwo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLetterTwo(event.target.value);
    };
    const handleTextInputChangeThree = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLetterThree(event.target.value);
    };

    const handleTextInputChangetextOneOne = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextOneOne(event.target.value);
    };
    const handleTextInputChangetextOneTwo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextOneTwo(event.target.value);
    };
    const handleTextInputChangetextTwoOne = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextTwoOne(event.target.value);
    };
    const handleTextInputChangetextTwoTwo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextTwoTwo(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        checkString(letterOne, letterTwo);
        console.log(holdOne);
    }

    function checkString(s:any, a:any){
        let array = s + a;
        let test:string[][] = [];
        let count = 0;
        let count2 = 0;
        let set = 0;
        for (let i = 0; i < array.length; i++)
            // saves before i in test, incriment, change set, 
            if(s.charAt(i).isNumeric){
                if(test.indexOf(array.subString(set, i-1)) === -1){
                    test[count][0] = array.substring(set,i-1);
                    if(i+1 < array.length && array.charAt(i+1).isNumeric){
                        test[count][1] = String(Number(array.charAt(i)) + Number(array.charAt(i+1)));
                    } else {
                        test[count][1] = array.charAt(i)
                    }
                } else {
                    if(i+1 < array.length && array.charAt(i+1).isNumeric){
                        test[test.findIndex(arr => arr.includes(array.charAt(i)))][1] = String(Number(array.charAt(i)) + Number(array.charAt(i+1)));
                    } else{
                        test[test.findIndex(arr => arr.includes(array.charAt(i)))][1] = array.charAt(i)
                    }
                    set = i+2;
                    count++
                }
                test[count] = array.substring(set,i-1);
                count++;
                set = i+1;
                test[count] = array.charAt(i);
            }
            setHoldOne(test);
    }


    if (choice === 'BalancingEquations'){
        return(
            <Container>
                <Typography marginLeft='auto' variant='h2'>{choice}</Typography>
                
                    <Box
                    
                        display='flex'
                        flexDirection='row'
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id='letOne'
                                variant='filled'
                                value= {letterOne}
                                onChange= {handleTextInputChangeOne}
                                required
                                sx={{ maxWidth: '50px', "& .MuiInputBase-root": {
                                    height: 40}}}
                            />
                            <TextField
                            id='letTwo'
                            variant='filled'
                            value= {letterTwo}
                                onChange= {handleTextInputChangeTwo}
                            required
                            sx={{ maxWidth: '50px', "& .MuiInputBase-root": {
                                height: 40}, padding: 'auto'}}
                        />
                            <Box padding='auto' marginTop='auto' marginBottom='auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                            </Box>
                            <TextField
                                id='letThree'
                                variant='filled'
                                value= {letterThree}
                                onChange= {handleTextInputChangeThree}
                                required
                                sx={{ maxWidth: '50px', "& .MuiInputBase-root": {
                                    height: 40}}}
                            />
                            <TextField
                                id='letFour'
                                variant='filled'
                                required
                                sx={{ maxWidth: '50px', "& .MuiInputBase-root": {
                                    height: 40}}}
                            />
                            <Button type='submit'></Button>
                        </form>
                    </Box>
                    
                Now we will figure it out
                    <Box>
                        <TableContainer component={Paper} sx={{ maxWidth: 410 }}>
                            <Table sx={{ maxWidth: 100 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="right">Reactants (Left Side)</TableCell>
                                        <TableCell align="right">Products (Right Side)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell><TextField value= {textOneOne} onChange= {handleTextInputChangetextOneOne}/></TableCell>
                                        <TableCell><TextField value= {textOneTwo} onChange= {handleTextInputChangetextOneTwo}/></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* <Button onClick={checkFirst}>Check</Button> */}
                    </Box>
            </Container>
        );
    }
    return(
        <Container>
            {choice}
        </Container>
    )
    };
export default Equations;