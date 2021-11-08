import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function TableTransaction(TableData) {
    const classes = useStyles();
    const headerValue = ['Дата оформления', 'Услуга', 'Дата услуги', 'Цена']
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow >
                        {headerValue.map((item, index) => (
                            <TableCell key={index}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {TableData ? TableData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {item.value}
                            </TableCell>
                        </TableRow>
                    )) : ''}
                </TableBody>
            </Table>
        </TableContainer>
    );
}