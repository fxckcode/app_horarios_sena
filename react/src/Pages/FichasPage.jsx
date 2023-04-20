import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Base from '../Layout/Base'
import '../scss/FichasPage.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function FichasPage() {  
    return (
        <Base user={''}>
            <div className='fichaContain'>
                <div className='titleFichas'>
                    <h2>Gestionar Fichas</h2>
                </div>
                <div className='modalFichas'>
                    <a href="#" className='btn-modal'>Nueva ficha</a>
                </div>
                <div className='tableFichas'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Nombre ficha</StyledTableCell>
                                    <StyledTableCell align="right">Fecha inicio</StyledTableCell>
                                    <StyledTableCell align="right">Fecha fin</StyledTableCell>
                                    <StyledTableCell align="right">Lunes</StyledTableCell>
                                    <StyledTableCell align="right">Martes</StyledTableCell>
                                    <StyledTableCell align="right">Miercoles</StyledTableCell>
                                    <StyledTableCell align="right">Jueves</StyledTableCell>
                                    <StyledTableCell align="right">Viernes</StyledTableCell>
                                    <StyledTableCell align="right">Horas</StyledTableCell>
                                    <StyledTableCell align="right">Admin</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">Prueba</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">Prueba</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                    <StyledTableCell align="right">Preuba 1</StyledTableCell>
                                </StyledTableRow> 
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </Base>
    )
}

export default FichasPage