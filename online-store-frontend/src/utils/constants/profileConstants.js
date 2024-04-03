import TextField from '@mui/material/TextField';
import styled from "@mui/styled-engine";

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#663334',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#663334',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#663334',
      },
      '&:hover fieldset': {
        borderColor: '#663334',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#663334',
      },
    },
});