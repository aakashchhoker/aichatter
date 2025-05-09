import * as React from "react"
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export function Chart({
  data,
  xAxisKey,
  yAxisKey,
  title,
  color = "#8884d8",
}) {
  return (
    <div className="w-full h-[400px]">
      {title && (
        <h3 className="text-lg font-semibold text-center mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={yAxisKey}
            stroke={color}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  xAxisKey: PropTypes.string.isRequired,
  yAxisKey: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string
}

// Example usage:
// const data = [
//   { name: "Jan", value: 400 },
//   { name: "Feb", value: 300 },
//   { name: "Mar", value: 600 },
//   { name: "Apr", value: 800 },
//   { name: "May", value: 500 },
// ]
// 
// <Chart
//   data={data}
//   xAxisKey="name"
//   yAxisKey="value"
//   title="Monthly Sales"
//   color="#8884d8"
// /> 