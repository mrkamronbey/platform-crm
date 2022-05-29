import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";
import StudentEdit from '../../Page/StudentEdit/StudentEdit'

const pdata = [
  {
    name: "Python",
    student: 55,
    fees: 10,
    hour: "10 am",
    foiz: 100,
  },
  {
    name: "Javascript",
    student: 40,
    fees: 12,
    hour: "9 am",
  },
  {
    name: "PHP",
    student: 65,
    fees: 10,
    hour: "12 am",
  },
  {
    name: "Java",
    student: 45,
    fees: 5,
    hour: "13 am",
    foiz: 70,
  },
  {
    name: "C#",
    student: 60,
    fees: 4,
    hour: "07 am",
  },
  {
    name: "C++",
    student: 45,
    fees: 8,
    hour: "14 am",
  },

  {
    name: "PHP",
    student: 85,
    fees: 10,
    hour: "12 am",
  },
  {
    name: "Java",
    student: 40,
    fees: 5,
    hour: "13 am",
  },
  {
    name: "C#",
    student: 76,
    fees: 4,
    hour: "07 am",
  },
  {
    name: "C++",
    student: 90,
    fees: 8,
    hour: "14 am",
  },
];

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 400 },
  { name: "Group D", value: 350 },
];
const COLORS = ["#605CFF", "#fff", "#FF69B4", "#2FE5A7"];

function Charts() {
  return (
    <>
      <div className="dashboard">
        <div className="chart">
          <div className="title">O’quv markaz statikasi</div>
          <AreaChart
            width={650}
            height={250}
            data={pdata}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgba(32, 30, 135, 0.5)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(72, 222, 255, 0.35)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              padding={{ right: 30, left: 10 }}
              allowDataOverflow={true}
              tickLine={false}
              dataKey="hour"
              stroke="#FFFFFF"
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                opacity: "0.7",
              }}
              axisLine={false}
              strokeWidth="1"
            />
            <YAxis
              stroke="#FFFFFF"
              style={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                opacity: "0.7",
              }}
              axisLine={false}
              tickSize="1"
            />
            <CartesianAxis
              vertical={false}
              dataKey="student"
              strokeWidth="0.1"
              className="chartGrid"
            />
            <Tooltip
              isAnimationActive={true}
              offset={10}
              cursor={{ stroke: "#605CFF", strokeWidth: 2, strokeDasharray: 3 }}
              vertical
              contentStyle={{
                stroke: "#FF69B4",
                borderRadius: "10px",
                fontFamily: "Montserrat",
                fontSize: "12px",
              }}
            />
            <Area
              animationEasing="ease-in-out"
              activeDot={{ r: 5, stroke: "#FF69B4", strokeWidth: 2 }}
              dot={{ r: 4, stroke: "#FF69B4", strokeWidth: 2 }}
              baseLine={[{ x: 12, y: 15 }]}
              legendType="square"
              type="monotoneX"
              dataKey="student"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </div>
        <div className="piecahrt">
        <div className="titles">Analytics</div>
          <PieChart width={350} height={250}>
            <Pie
              data={data}
              cx={180}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              // fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              isAnimationActive={true}
              offset={10}
              cursor={{ stroke: "#605CFF", strokeWidth: 2, strokeDasharray: 3 }}
              vertical
              contentStyle={{
                stroke: "#FF69B4",
                borderRadius: "10px",
                fontFamily: "Montserrat",
                fontSize: "12px",
              }}
            />
          </PieChart>
          <div className="c-static">
            <div className="student c-flex">
              <div className="circle-span students-circle"></div>
              <p>O’quvchilar</p>
            </div>
            <div className="teacher c-flex">
              <div className="circle-span teachers-circle"></div>
              <p>O’qituvchilar</p>
            </div>
            <div className="worker c-flex">
              <div className="circle-span worker-circle"></div>
              <p>Ishchi</p>
            </div>
          </div>
        </div>
      </div>
      <StudentEdit/>
    </>
  );
}

export default Charts;
