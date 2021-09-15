import React from  "react";
import {Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ProfessorsByGender({data}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="value" nameKey="name"  fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}

export  default ProfessorsByGender;
