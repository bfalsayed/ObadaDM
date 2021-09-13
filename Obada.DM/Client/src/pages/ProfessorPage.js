import React, {FC, useEffect, useMemo, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import SimpleCard from "../components/Card/Card";
import BasicTable from "../components/Table/Table";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import colors from "../theme/colors";
import SimpleChart from "../components/Chart/PublicationsTimeSeriesBarChart";

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

const ProfessorPage = ({pathname}) => {
    const [students, setStudents] = useState([]);
    const [professor, setProfessor] = useState(null);
    const [publicationsTimeSeries, setPublicationsTimeSeries] = useState(null);
    const location = useLocation();
    const classes = useStyles();

    const professorId = useMemo(() => {
        const urlParts = location.pathname.split("/");
        return urlParts[urlParts.length - 1]
    }, location);

    useEffect(() => {
        getProfessorData({professorId})
    }, []);

    const getProfessorData = ({professorId}) => {
        axios.get(`/Professors/${professorId}`).then(res => {
            setStudents(res.data.students.map(item => ({...item, details: "details"})))
            setProfessor(res.data.professor)
            setPublicationsTimeSeries(Object.entries(res.data.publicationsTimeSeries).map(entry => (
                {
                    date: entry[0],
                    publications: entry[1].length,
                }
            )))
        })
    }
    return (
        <div>
            {
                professor &&
                <SimpleCard title={"Professor Information"} >
                    <InfoItem classes={classes} itemKey={"Name"} value={professor.firstName + " " + professor.lastName}/>
                    <InfoItem classes={classes} itemKey={"Job Title"} value={professor.jobTitle}/>
                    <InfoItem classes={classes} itemKey={"Email"} value={professor.contactEmail}/>
                    <InfoItem classes={classes} itemKey={"Gender"} value={professor.gender}/>
                    <InfoItem classes={classes} itemKey={"Office Number"} value={professor.officeNumber}/>
                    <InfoItem classes={classes} itemKey={"Webpage"} value={professor.webpage}/>
                </SimpleCard>
            }
            <SimpleCard title={"Students"}>
                <BasicTable
                    columns={[
                        {key: "id", title: "Id"},
                        {key: "studentName", title: "Name"},
                        {key: "studentEmail", title: "Email"},
                        {key: "researchProjectTitle", title: "Research Project Title"},
                        {key: "researchProjectDescription", title: "Research Project Description"},
                        {key: "details", title: "", Component: (props) => <div>
                                <Link to={`/professor/${props.id}`}>
                                    Details
                                </Link>
                            </div>},
                    ]}
                    rows={students}
                >

                </BasicTable>
            </SimpleCard>

            <SimpleCard title={"Publications"} >
                <div style={{width: "100%", height: 500}}>

                    {publicationsTimeSeries && <SimpleChart data={publicationsTimeSeries}/>}
                </div>
            </SimpleCard>
        </div>
    );
};

const InfoItem = ({classes, itemKey, value}) => (
    <div className={classes.infoItem}>
        <span className={classes.infoItemKey}>
            {itemKey}:
        </span>
        <span className={classes.infoItemValue}>
            {value}
        </span>
    </div>
)

export default ProfessorPage;
