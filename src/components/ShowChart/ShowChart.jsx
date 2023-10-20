import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ShowChart = () => {
  const marksArray = [
    {
      id: 1,
      name: "Ataur",
      physics: 75,
      chemistry: 85,
      math: 90,
    },
    {
      id: 2,
      name: "Badol",
      physics: 80,
      chemistry: 70,
      math: 95,
    },
    {
      id: 3,
      name: "Rummon",
      physics: 90,
      chemistry: 80,
      math: 75,
    },
    {
      id: 4,
      name: "Taiey",
      physics: 65,
      chemistry: 75,
      math: 85,
    },
    {
      id: 5,
      name: "Alif",
      physics: 70,
      chemistry: 90,
      math: 80,
    },
    {
      id: 6,
      name: "Himu",
      physics: 85,
      chemistry: 65,
      math: 70,
    },
    {
      id: 7,
      name: "Fijar",
      physics: 80,
      chemistry: 90,
      math: 85,
    },
    {
      id: 8,
      name: "Masum",
      physics: 75,
      chemistry: 85,
      math: 90,
    },
    {
      id: 9,
      name: "Rihan",
      physics: 90,
      chemistry: 70,
      math: 80,
    },
    {
      id: 10,
      name: "Billa",
      physics: 70,
      chemistry: 75,
      math: 95,
    },
    {
      id: 11,
      name: "Shanto",
      physics: 80,
      chemistry: 85,
      math: 65,
    },
    {
      id: 12,
      name: "Sumon",
      physics: 75,
      chemistry: 90,
      math: 70,
    },
  ];
  return (
    <div className="md:w-10/12 mx-auto px-4 mt-4">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={marksArray}>
          <Line stroke="#ddd" dataKey="physics"></Line>
          <Line stroke="#82ca9d" dataKey="chemistry"></Line>
          <Line stroke="#8884d8" dataKey="math"></Line>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShowChart;
