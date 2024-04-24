import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#FCE6C6",
        color: "#663334",
        borderColor: "#663334",
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "#FCE6C6",
        color: "#663334",
        borderColor: "#663334",
        fontSize: 16,
    },
}));
