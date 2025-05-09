import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export const ChartPage = () => {
  const lineData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
  ];

  const barData = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 600 },
    { name: "D", value: 800 },
    { name: "E", value: 500 },
  ];

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const chartContent = {  
    name: "chart",
    title: "Chart Component",
    description: `The Chart component provides various types of data visualization options. It's built on top of Recharts and offers a wide range of chart types and customization options.

Key Features:
- Multiple chart types (Line, Bar, Pie, etc.)
- Responsive design
- Interactive tooltips
- Customizable styling
- Animation support
- Accessibility features

Best Practices:
1. Choose appropriate chart type for data
2. Use consistent colors and styling
3. Include clear labels and legends
4. Consider mobile responsiveness
5. Handle data loading states`,
    codeExample: `import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function ExampleChart() {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}`,
    usage: `The Chart component is perfect for:
- Data visualization
- Analytics dashboards
- Performance metrics
- Trend analysis
- Statistical data
- Financial reports`,
    props: [
      {
        name: "data",
        type: "array",
        description: "The data to be displayed in the chart",
      },
      {
        name: "width",
        type: "number",
        description: "The width of the chart",
      },
      {
        name: "height",
        type: "number",
        description: "The height of the chart",
      },
    ],
    examples: [
      {
        title: "Line Chart",
        description: "A simple line chart showing trends over time",
        content: (
          <Card className="p-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        ),
      },
      {
        title: "Bar Chart",
        description: "A bar chart showing categorical data",
        content: (
          <Card className="p-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        ),
      },
      {
        title: "Pie Chart",
        description: "A pie chart showing proportional data",
        content: (
          <Card className="p-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        ),
      },
    ],
  };

  return <ComponentDetail {...chartContent} />;
}; 