import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import SearchBar from '../../../../Widget/SearchBox'
import accountsService from '../../../../../service/accountsService';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import IconButton from '@mui/material/IconButton';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'sl_no',
        numeric: true,
        disablePadding: false,
        label: 'Sl No',
    },
    {
        id: 'sponsorship_no',
        numeric: true,
        disablePadding: false,
        label: 'Sponsorship No',
    },
    {
        id: 'sponsor_name',
        numeric: true,
        disablePadding: false,
        label: 'Sponsor Name',
    },
    {
        id: 'sponsor_mobile',
        numeric: true,
        disablePadding: false,
        label: 'Sponsor Mobile',
    },
    {
        id: 'student_name',
        numeric: true,
        disablePadding: false,
        label: 'Student Name',
    },
    {
        id: 'student_standard',
        numeric: true,
        disablePadding: false,
        label: 'Class',
    },
    {
        id: 'payment_date',
        numeric: true,
        disablePadding: false,
        label: 'Payment Date',
    },
    {
        id: 'amount',
        numeric: true,
        disablePadding: false,
        label: 'Amount',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'right'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { requestSearch, cancelSearch } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 0 },
                pr: { xs: 0, sm: 0 },
            }}
        >

            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Transactions
            </Typography>
            <SearchBar
                style={{
                    width: "19rem",
                    height: '2.5rem',
                    marginLeft: 10
                }}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
        </Toolbar>
    );
};

function TransactionTable() {

    const [originalRows, setOriginalRows] = useState([])
    const [rows, setRows] = useState([]);
    const [searched, setSearched] = useState("");

    useEffect(async () => {
        const data = (await accountsService.fetchTransactions()).data
        setOriginalRows(data)
        setRows(data)
    }, [])

    const requestSearch = (searchedVal) => {
        const filteredRows = originalRows.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    let prop = {
        requestSearch: requestSearch,
        cancelSearch: cancelSearch,
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, padding: 3 }}>
                <EnhancedTableToolbar {...prop} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row._id}
                                        >
                                            <TableCell
                                                align="left"
                                                id={labelId}
                                            >
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="left">{row.sponsorship_no}</TableCell>
                                            <TableCell align="left">{row.sponsor_name}</TableCell>
                                            <TableCell align="left">{row.sponsor_mobile}</TableCell>
                                            <TableCell align="left">{row.student_name}</TableCell>
                                            <TableCell align="left">{row.student_standard}</TableCell>
                                            <TableCell align="left">{new Date(row.created_at).toLocaleDateString('en-GB')}</TableCell>
                                            <TableCell align="left">{row.amount}</TableCell>
                                            {/* <TableCell align="left" sx={{ padding: 1 }}>
                                                <IconButton>
                                                    <VisibilityIcon />
                                                </IconButton>
                                                <IconButton>
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell> */}
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

export default TransactionTable
