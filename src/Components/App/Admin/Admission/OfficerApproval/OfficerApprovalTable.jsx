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
import admissionService from '../../../../../service/admissionService';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Snackbar, Alert, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

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
        id: 'name',
        numeric: true,
        disablePadding: false,
        label: 'Name',
    },
    {
        id: 'dob',
        numeric: true,
        disablePadding: false,
        label: 'Date of Birth',
    },
    {
        id: 'gender',
        numeric: true,
        disablePadding: false,
        label: 'Gender',
    },
    {
        id: 'student_type',
        numeric: true,
        disablePadding: false,
        label: 'Student Type',
    },
    {
        id: 'board_of_studies',
        numeric: true,
        disablePadding: false,
        label: 'Board of Studies',
    },
    {
        id: 'standard',
        numeric: true,
        disablePadding: false,
        label: 'Class',
    },
    {
        id: 'action',
        numeric: true,
        disablePadding: false,
        label: 'Action',
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
                Officer Approval
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

function OfficerApprovalTable() {

    const [originalRows, setOriginalRows] = useState([])
    const [rows, setRows] = useState([]);
    const [searched, setSearched] = useState("");
    const [toast, setToast] = useState({ status: false })
    const [dialog, setDialog] = useState(false)
    const [applicantId, setApplicantId] = useState('')

    const handleDialogClose = () => setDialog(false);

    const handleSponsorApplicationApprove = () => {
        admissionService.applicantOfficeApproval({
            applicant_id: applicantId
        }).then(async response => {
            const data = (await admissionService.getOfficerApprovalList()).data
            setOriginalRows(data)
            setRows(data)
            setToast({
                status: true,
                message: "Application Approved",
                severity: 'success',
                handleClose: () => {
                    setToast({ status: false })
                }
            })
            handleDialogClose()
        })
    }
    useEffect(async () => {
        const data = (await admissionService.getOfficerApprovalList()).data
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
    // const [selected, setSelected] = useState([]);
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
                                    const dob = (new Date(row.dob).toLocaleDateString('en-GB'));
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
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{dob}</TableCell>
                                            <TableCell align="left">{row.gender}</TableCell>
                                            <TableCell align="left">{row.student_type}</TableCell>
                                            <TableCell align="left">{row.board_of_studies}</TableCell>
                                            <TableCell align="left">{row.standard}</TableCell>
                                            <TableCell align="left" sx={{ padding: 1 }}>
                                                <IconButton>
                                                    <VisibilityIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        setApplicantId(row._id)
                                                        setDialog(true)
                                                    }}
                                                >
                                                    <CheckCircleOutlineIcon />
                                                </IconButton>
                                                <IconButton>
                                                    <EditIcon />
                                                </IconButton>
                                            </TableCell>
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
            <Dialog
                open={dialog}
                onClose={handleDialogClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Are you Sure ?
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={handleDialogClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSponsorApplicationApprove}>Confirm</Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={toast.status}
                autoHideDuration={3000} onClose={toast.handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{ bottom: { xs: 90, sm: 10 } }}
            >
                <Alert onClose={toast.handleClose} color="info" severity={toast.severity} sx={{ width: 'auto' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default OfficerApprovalTable
