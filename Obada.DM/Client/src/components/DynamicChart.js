import {useEffect, useState} from "react";
import SimpleChart from "./Chart/PublicationsTimeSeriesBarChart";
import SimpleCard from "./Card/Card";
import Select from "./Select/Select";
import React from "react";
import DepartmentsBarChart from "./Chart/DepartmentsBarChart";
import ProfessorsByGender from "./Chart/ProfessorsByGender";
import ProjectsByArea from "./Chart/ProjectsByArea";
import PublicationsByProfessors from "./Chart/PublicationsByProfessors";

const chartType = {
    'type': {
        title: "title"
    }
}

const DynamicChart = ({data}) => {
    const [charts, setCharts] = useState([
        {
            value: "professorsByGender",
            title: "Professors By Gender",
            Component: ProfessorsByGender
        },
        {
            value: "projectsByArea",
            title: "Projects By Research Area",
            Component: ProjectsByArea,
        },
        {
            value: "publicationsByProfessors",
            title: "Publications By Professors",
            Component: PublicationsByProfessors
        }
    ]);
    const [chart, setChart] =  useState(charts[0]);

    const onChartChartChanged = (value) => {
        setChart(charts.find(t => t.value === value))
    }

    return (
        <>
            <div className={"filter"} style={{marginBottom: 15}}>
                <Select label={"Chart"}
                        items={charts}
                        onChange={onChartChartChanged}
                        defaultValue={charts[0].value}
                        includeNone={false}
                        includeAll={false}
                />
            </div>
            <div style={{width: "100%", height: 400}}>
                <chart.Component data={data[chart.value]}/>
            </div>
       </>
    )
}
export  default DynamicChart;
