import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import colors from "../../theme/colors";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    headerCell: {
        backgroundColor: colors.palette.primary,
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    noResults: {
        fontSize: 16,
        color: "grey",
        fontStyle: "italic",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80px"
    }
})

export default function BasicTable({columns, rows}) {
    const classes = useStyles();
console.log(Object.entries(columns))
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map(({title, key,}) =>
                                <TableCell align="center" className={classes.headerCell}>
                                    {title}
                                </TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length === 0 &&
                        <TableRow key={"no-results"} className={classes.noResults} align={"center"}>
                               <span>No Results Found</span>
                        </TableRow>
                        }
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            {
                                Object.entries(columns).map(entry => {
                                    const Component = entry[1]['Component'];
                                    return (
                                        <TableCell align="center">
                                            {Component ? <Component {...row}/> : row[entry[1]['key']]}
                                         </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
