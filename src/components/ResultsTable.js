import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function ResultsTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">name</TableCell>
                        <TableCell align="right">date</TableCell>
                        <TableCell align="right">status</TableCell>
                        <TableCell align="right">tiger_result</TableCell>
                        <TableCell align="right">tiger_performance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.results.map((p, index) => (
                        <TableRow
                            key={index}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {p.name}
                            </TableCell>
                            <TableCell align="right">{p.date}</TableCell>
                            <TableCell align="right">{p.status}</TableCell>
                            <TableCell align="right">{p.tiger_result}</TableCell>
                            <TableCell align="right">{p.tiger_performance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
