import React, {FC, useEffect, useState} from "react";
import axios from 'axios';
import Select from "../../components/Select/Select";
import BasicTable from "../../components/Table/Table";
import SimpleCard from "../../components/Card/Card";
import {Link} from "react-router-dom";

const HomePage = ({pathname}) => {
    const [departments, setDepartments] = useState([]);
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        axios.get('/Departments').then(res => {
            setDepartments(res.data.map(item => ({value: item.id, title: item.name})))
        })
        getProfessors('all');
    }, []);

    const onDepartmentChange = (value) => {
        getProfessors(value)
    }

    const getProfessors = (department) => {
        const departmentIdQP = department === 'all' ? '' : department === 'none' ? `departmentId=0` : `departmentId=${department}`;
        axios.get(`/Professors?${departmentIdQP}`).then(res => {
            setProfessors(res.data.map(item => ({...item, details: "details"})))
        })
    }
    return (
        <div>
            <SimpleCard title={"Professors"}>
                <Select
                    items={departments}
                    label={"Departments"}
                    onChange={onDepartmentChange}
                    defaultValue={"all"}
                ></Select>
                <BasicTable
                    columns={[
                        {key: "id", title: "Id"},
                        {key: "firstName", title: "First Name"},
                        {key: "lastName", title: "Last Name"},
                        {key: "contactEmail", title: "Contact Email"},
                        {key: "contactPhone", title: "Contact Phone"},
                        {key: "jobTitle", title: "Job Title"},
                        {key: "dateOfBirth", title: "Date of Birth"},
                        {key: "gender", title: "Gender"},
                        {key: "officeNumber", title: "Office Number"},
                        {key: "webpage", title: "Webpage"},
                        {key: "details", title: "", Component: (props) => <div>
                                <Link to={`/professor/${props.id}`}>
                                    Details
                                </Link>
                            </div>},
                    ]}
                    rows={professors}
                >

                </BasicTable>
            </SimpleCard>
        </div>
    );
};

export default HomePage;
