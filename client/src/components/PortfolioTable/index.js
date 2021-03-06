import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useForm } from 'react-hook-form';
import { removeHyphenAddDot } from "../../utilities/StringFormatter"
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

function createData(name, symbol, dateAdded, prevSharePrice, currSharePrice) {
    let change = (currSharePrice - prevSharePrice).toFixed(2)
    
    let percentChange = (change / prevSharePrice) * 100
    percentChange = (Math.round(percentChange * 100) / 100).toFixed(2);
    return { name, symbol, dateAdded, prevSharePrice, currSharePrice, change, percentChange };
}

const rows = [
    createData("Royal Dutch Shell", "RDS-B", "1/01/2020", 38.70, 38.17),
    createData("British American Tobacco", "BTI", "1/03/2020", 37.50, 37.70),
    createData('Apple', "AAPL", "1/05/2020", 125.00, 129.85),
    createData('Tesla', "TSLA", "03/27/2020", 103.00, 845.00),
    createData('Netflix', "NFLX", "01/03/2020", 507.00, 501.00),
    createData('Facebook', "FB", "01/03/2020", 258.00, 248.00),
];

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

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// company, symbol, dateAdded, prevSharePrice, currSharePrice, change
const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Company' },
    { id: 'symbol', numeric: true, disablePadding: false, label: 'Symbol' },
    { id: 'dateAdded', numeric: true, disablePadding: false, label: 'Date Added' },
    { id: 'prevSharePrice', numeric: true, disablePadding: false, label: 'Previous Price' },
    { id: 'currSharePrice', numeric: true, disablePadding: false, label: 'Current Price' },
    { id: 'change', numeric: true, disablePadding: false, label: 'Change' },
    { id: 'percentChange', numeric: true, disablePadding: false, label: '% Change' }
];

function EnhancedTableHead(props) {
    const { classes, deleteMode, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    {deleteMode && (
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{ 'aria-label': 'Select All Stocks' }}
                        />

                    )}
                </TableCell>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: props.deleteMode,
            })}
        >
            
            {props.deleteMode &&
            <Tooltip title="Cancel" >
                <IconButton aria-label="cancel"
                onClick={props.onDeleteModeClick}>
                    <CancelIcon />
                </IconButton>
            </Tooltip>
            
            }

            {props.deleteMode ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        Stocks
                    </Typography>
                )}

            {(props.deleteMode) ? (
                <>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" type="submit">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>

                </>
            ) : (
                    <Tooltip title="Edit list">
                        <IconButton
                            aria-label="edit list"
                            onClick={props.onDeleteModeClick}>
                            < EditIcon />
                        </IconButton>
                    </Tooltip>
                )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        width: '100%',
    },
    paper: {
        color: "white",
        width: '95%',
        marginBottom: theme.spacing(2),
        // border: "5px solid rgba(21,244,238, 0.2)",
        maxWidth: "100%",
        margin: "0 auto"
    },
    table: {
        minWidth: 750,

    },
    tableRow: {

    },
    tableCellPositive: {

        color: "rgb(57,255,20)"
    },

    tableCellNegative: {
        color: "rgb(255, 7, 58)"
    },

    boxNegative: {
        backgroundColor: "rgba(130,120,120, 0.20)",
        display: "inline-block",
        borderRadius: "2px",
        padding: "0.2rem 0.8rem"
    },

    boxPositive: {
        backgroundColor: "rgba(130,130,130, 0.20)",
        display: "inline-block",
        borderRadius: "2px",
        padding: "0.2rem 0.8rem"
    },

    boxNeutral: {
        backgroundColor: "rgba(100,100,100, 0.2)",
        display: "inline-block",
        borderRadius: "2px",
        padding: "0.2rem 0.8rem"
    },


    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function PortfolioTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [deleteMode, setDeleteMode] = React.useState(false);

    //Code needed for react hook form
    const { handleSubmit, register } = useForm();
    const onSubmit = handleSubmit((data) => {
        // data.filter((obj)=>{
        //     obj.value === false
        // })
        let symbolsForDeleting = []
        Object.keys(data).forEach(key => {
            if (data[key] === true) {
                symbolsForDeleting.push(key)
            };
        });
        symbolsForDeleting = removeHyphenAddDot(symbolsForDeleting)
        console.log(symbolsForDeleting)
        console.log(data)
    });

    const handleRequestSort = (event, property) => {

        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {

        if (event.target.checked) {
            const newSelectedIds = rows.map((n) => n.symbol);
            setSelected(newSelectedIds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDeleteMode = (event) => {
        setDeleteMode(!deleteMode)
        setSelected([])
    };


    //conditional logic to render the color of the text
    const renderTextColor = (value) => {
        if (value > 0) {
            return classes.tableCellPositive
        } else if (value < 0) {
            return classes.tableCellNegative
        } else {
            return
        }
    }

    const renderBoxColor = (value) => {
        if (value > 0) {
            return classes.boxPositive
        } else if (value < 0) {
            return classes.boxNegative
        } else {
            return classes.boxNeutral
        }
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <form onSubmit={onSubmit}>
                <Paper className={classes.paper}>
                    <EnhancedTableToolbar numSelected={selected.length} onDeleteModeClick={handleDeleteMode} deleteMode={deleteMode} />
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                                deleteMode={deleteMode}

                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.symbol);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.symbol)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.symbol}
                                                selected={isItemSelected}
                                                className={classes.tableRow}

                                            >

                                                <TableCell padding="checkbox">
                                                    {deleteMode &&
                                                        <Checkbox
                                                            checked={isItemSelected}
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                            //fields needed for react hook form
                                                            name={row.symbol}
                                                            inputRef={register}
                                                        />}
                                                </TableCell>


                                                <TableCell component="th" id={labelId} scope="row" padding="none">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.symbol}</TableCell>
                                                <TableCell align="right">{row.dateAdded}</TableCell>
                                                <TableCell align="right">{row.prevSharePrice}</TableCell>
                                                <TableCell align="right"
                                                    className={row.currSharePrice < row.prevSharePrice ? classes.tableCellNegative : classes.tableCellPositive}
                                                >
                                                    <Box className={renderBoxColor(row.percentChange)}>

                                                        {row.currSharePrice}
                                                    </Box>
                                                </TableCell>
                                                <TableCell
                                                    className={renderTextColor(row.change)}
                                                    align="right">
                                                    <Box className={renderBoxColor(row.percentChange)}>
                                                    {row.change < 0 ? `${row.change}`:`+${row.change}`}
                                                    </Box>
                                                </TableCell>
                                                <TableCell
                                                    className={renderTextColor(row.percentChange)}
                                                    align="right">
                                                    <Box className={renderBoxColor(row.percentChange)}>
                                                        {row.percentChange < 0 ? `${row.percentChange}` : `+${row.percentChange}`}

                                                    </Box>

                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                        <TableCell colSpan={8} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </form>
        </div>
    );
}