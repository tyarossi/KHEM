import React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const UserScores = () => {
    return(
        <Box paddingBottom='100px'>
            <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell align="left">Module</TableCell>
                    <TableCell align="left">Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">mod1</TableCell>
                        <TableCell align="left">example</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">mod1</TableCell>
                        <TableCell align="left">example</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">mod2</TableCell>
                        <TableCell align="left">example</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">mod2</TableCell>
                        <TableCell align="left">example</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">mod4</TableCell>
                        <TableCell align="left">example</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
    </Box>
    )
}
export default UserScores;