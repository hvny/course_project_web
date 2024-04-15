import "./DataTable.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

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

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#FCE6C6",
          color: "#663334",
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          backgroundColor: "#FCE6C6",
          color: "#663334",


        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            borderColor: "#FCE6C6",
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 2,
          borderColor: "#FCE6C6",
          backgroundColor: "#f5d5a6",
        },
      }));
      

    return (
        <StyledEngineProvider injectFirst>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column) => (
                                    <StyledTableCell align="left">{column.headerName}</StyledTableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                                <StyledTableCell align="left">{row.city}</StyledTableCell>
                                <StyledTableCell align="left">{row.street}</StyledTableCell>
                                <StyledTableCell align="left">{row.house}</StyledTableCell>
                                <StyledTableCell align="left">{row.entry}</StyledTableCell>
                                <StyledTableCell align="left">{row.floor}</StyledTableCell>
                                <StyledTableCell align="left">{row.apartment}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledEngineProvider> 
    );
}