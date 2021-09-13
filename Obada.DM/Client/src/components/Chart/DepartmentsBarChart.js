import React from  "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function DepartmentsBarChart({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="publications" fill="#FFA500" />
                <Bar dataKey="professors" fill="#CF0D0F" />
                <Bar dataKey="projects" fill="#81BC01" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export  default DepartmentsBarChart;
