import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
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
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button } from '@mui/material';
import SearchBar from '../../../../Common/SearchBox'
import admissionService from '../../../../../service/admissionService';

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
                {/* <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell> */}
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
    // numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    // onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    // rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { requestSearch, cancelSearch, handleAddApplicant } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 0 },
                pr: { xs: 0, sm: 0 },
                // ...(numSelected > 0 && {
                //     bgcolor: (theme) =>
                //         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                // }),
            }}
        >
            {/* {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
            )} */}

            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Applicant List
            </Typography>
            <Button sx={{ width: 199 }} onClick={handleAddApplicant} variant="contained" size="medium">Add Applicant</Button>
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

// EnhancedTableToolbar.propTypes = {
//     numSelected: PropTypes.number.isRequired,
// };

function ApplicantTable({ handleAddApplicant }) {

    const [originalRows, setOriginalRows] = useState([])
    const [rows, setRows] = useState([]);
    const [searched, setSearched] = useState("");

    useEffect(async () => {
        const data = (await admissionService.getApplicantList()).data
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

    // const handleSelectAllClick = (event) => {
    //     if (event.target.checked) {
    //         const newSelecteds = rows.map((n) => n.name);
    //         setSelected(newSelecteds);
    //         return;
    //     }
    //     setSelected([]);
    // };

    // const handleClick = (event, name) => {
    //     const selectedIndex = selected.indexOf(name);
    //     let newSelected = [];

    //     if (selectedIndex === -1) {
    //         newSelected = newSelected.concat(selected, name);
    //     } else if (selectedIndex === 0) {
    //         newSelected = newSelected.concat(selected.slice(1));
    //     } else if (selectedIndex === selected.length - 1) {
    //         newSelected = newSelected.concat(selected.slice(0, -1));
    //     } else if (selectedIndex > 0) {
    //         newSelected = newSelected.concat(
    //             selected.slice(0, selectedIndex),
    //             selected.slice(selectedIndex + 1),
    //         );
    //     }

    //     setSelected(newSelected);
    // };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const handleChangeDense = (event) => {
    //     setDense(event.target.checked);
    // };

    // const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    let prop = {
        requestSearch: requestSearch,
        cancelSearch: cancelSearch,
        handleAddApplicant: handleAddApplicant
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
                            // numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            // onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                        // rowCount={rows.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    // const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            // onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            // aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                        // selected={isItemSelected}
                                        >
                                            {/* <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell> */}
                                            <TableCell
                                                align="left"
                                                id={labelId}
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{row.dob}</TableCell>
                                            <TableCell align="left">{row.gender}</TableCell>
                                            <TableCell align="left">{row.board_of_studies}</TableCell>
                                            <TableCell align="left">{row.standard}</TableCell>
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
            {/* <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            /> */}
        </Box>
    );
}

export default ApplicantTable
