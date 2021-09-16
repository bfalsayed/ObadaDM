import React from  "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function DepartmentsBarChart({data, metric}) {
    return (
            <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={metric} fill="#FFA500" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export  default DepartmentsBarChart;
