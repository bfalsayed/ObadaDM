import React, {FC, useEffect, useMemo, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import SimpleCard from "../components/Card/Card";
import BasicTable from "../components/Table/Table";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import colors from "../theme/colors";
import SimpleChart from "../components/Chart/PublicationsTimeSeriesBarChart";
import DepartmentsBarChart from "../components/Chart/DepartmentsBarChart";

const useStyles = makeStyles({
    infoItem: {
        marginBottom: 5
    },
    infoItemKey: {
        fontWeight: "bold",
        fontSize: 15,
        marginRight: 5
    },
    infoItemValue: {
        fontSize: 15,
        marginRight: 5
    }
});

const StatisticsPage = ({pathname}) => {
    const [departmentStats, setDepartmentStats] = useState([]);

    useEffect(() => {
        getDepartmentsStats()
    }, []);

    const getDepartmentsStats = () => {
        axios.get(`/Departments/Statistics`).then(res => {
            setDepartmentStats(res.data.map(({department, professors, publications, projects}) => (
                {
                    name: department.name,
                    publications: publications.length,
                    professors: professors.length,
                    projects: projects.length,
                }
            )))
        })
    }
    return (
        <div>
            <SimpleCard title={"Departments Statistics"} >
                <div style={{width: "100%", height: 500}}>
                    {departmentStats && <DepartmentsBarChart data={departmentStats}/>}
                </div>
            </SimpleCard>
        </div>
    );
};

export default StatisticsPage;
