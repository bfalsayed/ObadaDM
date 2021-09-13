import React from  "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function SimpleChart({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="publications" fill="#FFA500" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export  default SimpleChart;
