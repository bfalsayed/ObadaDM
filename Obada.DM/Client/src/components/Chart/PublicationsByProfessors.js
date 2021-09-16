import React from  "react";
import {
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    Cell,
    Legend,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis, Bar
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function PublicationsByProfessors({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="professor" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="publications" fill="#FFA500" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export  default PublicationsByProfessors;
