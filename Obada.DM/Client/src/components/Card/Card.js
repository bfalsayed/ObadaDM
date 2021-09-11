import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import colors from "../../theme/colors";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: "10"
    },
    title: {
        color: colors.palette.primary,
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    body: {
        marginBottom: 12,
    },
});

export default function SimpleCard({children, title}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.body}>
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}
