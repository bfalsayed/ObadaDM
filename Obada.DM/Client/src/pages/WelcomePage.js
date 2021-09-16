import React, {FC, useEffect, useMemo, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router";
import colors from "../theme/colors";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
        marginBottom: 15
    },
    logo: {
    },
    info: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center"
    },
    start: {
        marginTop: 100,
        marginBottom: 100,
        '& a': {

        }
    },
    name: {
        marginTop: 100,
        fontSize: 16
    }
});

const WelcomePage = ({}) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <img src={"/logo.jpeg"} style={{width: 400}}/>
            </div>
            <div className={classes.info}>
                <span className={classes.title}>
                    Relational Database - User Interface for an Educational System
                </span>
                <span className={classes.name}>
                    <b>Prepared By:</b> Obada Abdallah
                </span>
                <div className={classes.start}>
                    <Button variant={"primary"}  style={{fontSize: 50, backgroundColor: colors.palette.primary, color: "white", borderRadius: 5}} onClick={() => {
                        history.push("/Dashboard")
                    }}>
                        Start
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
