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
import ProfessorsByGender from "../components/Chart/ProfessorsByGender";
import ProjectsByArea from "../components/Chart/ProjectsByArea";
import Calender from "../components/Calender";
import PublicationsByProfessors from "../components/Chart/PublicationsByProfessors";
import DepartmentsMetricsDynamicChart from "../components/DepartmentsMetricsDynamicChart";
import DynamicChart from "../components/DynamicChart";

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
    const [professorsByGender, setProfessorsByGender] = useState([]);
    const [projectsByArea, setResearchByArea] = useState([]);
    const [publicationsByProfessors, setPublicationsByProfessor] = useState([]);

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

        axios.get(`/ProfessorsByGender`).then(res => {
            setProfessorsByGender(Object.entries(res.data).map(entry => (
                {
                    name: entry[0],
                    value: entry[1].length,
                }
            )))
        })

        axios.get(`/ProjectsByResearchArea`).then(res => {
            setResearchByArea(Object.entries(res.data).map(entry => (
                {
                    researchArea: entry[0],
                    projects: entry[1].length,
                }
            )))
        })

        axios.get(`/PublicationsByProfessors`).then(res => {
            setPublicationsByProfessor(Object.entries(res.data).map(entry => (
                {
                    professor: entry[0],
                    publications: entry[1].length,
                }
            )))
        })


    }

    return (
        <div>
            <SimpleCard title={"Departments Statistics"} >
                <div style={{width: "100%", height: 500}}>
                    {departmentStats && <DepartmentsMetricsDynamicChart data={departmentStats}/>}
                </div>
            </SimpleCard>
            <SimpleCard title={"Professors By Gender"} >
                <div style={{width: "100%%", height: 500}}>
                    {professorsByGender && <ProfessorsByGender data={professorsByGender}/>}
                </div>
            </SimpleCard>
            <SimpleCard title={"Projects By Research Area"} >
                <div style={{width: "100%%", height: 500}}>
                    {projectsByArea && <ProjectsByArea data={projectsByArea}/>}
                </div>
            </SimpleCard>
            <SimpleCard title={"Puplications By Professors"} >
                <div style={{width: "100%%", height: 500}}>
                    {publicationsByProfessors && <PublicationsByProfessors data={publicationsByProfessors}/>}
                </div>
            </SimpleCard>
            <SimpleCard title={"Dynamic Chart"} >
                <div style={{width: "100%%", height: 500}}>
                    {publicationsByProfessors
                        &&
                    <DynamicChart data={{
                        professorsByGender, projectsByArea: projectsByArea  ,     publicationsByProfessors
                    }}/>
                    }
                </div>
            </SimpleCard>
        </div>
    );
};

export default StatisticsPage;
