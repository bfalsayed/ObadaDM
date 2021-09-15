import React from  "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function ProjectsByArea({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="researchArea" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="projects" fill="#0088FE" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export  default ProjectsByArea;
