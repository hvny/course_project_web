import "./DataTable.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledEngineProvider } from '@mui/material/styles';


export default function DataTable({ data }) {
    const columns = [
        { 
            field: 'id',
            headerName: 'ID',
            width: 20, 
        },
        { 
            field: 'city',
            headerName: 'Город',
            width: 100, 
        },
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
        },
    ];

    const rows = [
        { id: 1, city: "Киров", street: "Пушкина", house: 2, entry: 2, floor: 2, apartment: 2 },
        { id: 2, city: "Йошкар-Ола", street: "Лермонтова", house: 14, entry: 5, floor: 28, apartment: 228 }
    ];

    return (
        <StyledEngineProvider injectFirst>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column) => (
                                    <TableCell align="left">{column.headerName}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="left">{row.city}</TableCell>
                                <TableCell align="left">{row.street}</TableCell>
                                <TableCell align="left">{row.house}</TableCell>
                                <TableCell align="left">{row.entry}</TableCell>
                                <TableCell align="left">{row.floor}</TableCell>
                                <TableCell align="left">{row.apartment}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledEngineProvider> 
    );
}