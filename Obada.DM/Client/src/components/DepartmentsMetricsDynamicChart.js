import {useEffect, useState} from "react";
import SimpleChart from "./Chart/PublicationsTimeSeriesBarChart";
import SimpleCard from "./Card/Card";
import Select from "./Select/Select";
import React from "react";
import DepartmentsBarChart from "./Chart/DepartmentsBarChart";

const chartType = {
    'type': {
        title: "title"
    }
}

const DepartmentsMetricsDynamicChart = ({data}) => {
    const metricDefaultValue = 'professors';
    const [metric, setMetric] =  useState(metricDefaultValue);

    const onChartMetricChanged = (value) => {
        setMetric(value)
    }

    return (
        <>
            <div className={"filter"} style={{marginBottom: 15}}>
                <Select label={"Metric"}
                        items={[{value: "professors", title: "Professors"}, {value: "publications", title: "Publications"}, {value: "projects", title: "Projects"}]}
                        onChange={onChartMetricChanged}
                        defaultValue={metricDefaultValue}
                        includeNone={false}
                        includeAll={false}
                />
            </div>
            <div style={{width: "100%", height: 400}}>
                <DepartmentsBarChart data={data} metric={metric}/>
            </div>
       </>
    )
}
export  default DepartmentsMetricsDynamicChart;
