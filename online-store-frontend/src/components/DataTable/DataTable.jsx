import "./DataTable.css";

import { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { StyledTableCell } from "../../utils/constants/dataTableConstants";

import IconButton from '@mui/material/IconButton';
import { Button } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { StyledEngineProvider } from '@mui/material/styles';

export default function DataTable({ data }) {
    const columns = [
        { 
            field: 'id',
            headerName: 'ID',
            width: 20, 
        },
        /*{ 
            field: 'city',
            headerName: 'Город',
            width: 100, 
        },*/
        { 
            field: 'street',
            headerName: 'Улица',
            width: 100, 
        },
        {
            field: 'house',
            headerName: 'Дом',
            width: 10,
        },
        {
            field: 'info',
            headerName: '',
            width: 10,
        },
        /*{
            field: 'entry',
            headerName: 'Подъезд',
            width: 10,
        },
        {
            field: 'floor',
            headerName: 'Этаж',
            width: 10,
        },
        {
            field: 'apartment',
            headerName: 'Квартира',
            width: 10,
        },*/
    ];

    const rows = [
        { id: 1, city: "Киров", street: "Пушкина", house: 2, entry: 2, floor: 2, apartment: 2 },
        { id: 2, city: "Йошкар-Ола", street: "Лермонтова", house: 14, entry: 5, floor: 28, apartment: 228 }
    ];

    return (
        <StyledEngineProvider injectFirst>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" className="data-table">
                    <TableHead>
                        <TableRow className="data-table__row">
                            {
                                columns.map((column) => (
                                    <StyledTableCell align="left">{column.headerName}</StyledTableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className="data-table__row"
                            >
                                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                                {/* <StyledTableCell align="left">{row.city}</StyledTableCell> */}
                                <StyledTableCell align="left">{row.street}</StyledTableCell>
                                <StyledTableCell align="left">{row.house}</StyledTableCell>
                                {/* <StyledTableCell align="left">{row.entry}</StyledTableCell> */}
                                {/* <StyledTableCell align="left">{row.floor}</StyledTableCell> */}
                                {/* <StyledTableCell align="left">{row.apartment}</StyledTableCell> */}
                                <StyledTableCell align="left" >
                                    
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledEngineProvider> 
    );
}