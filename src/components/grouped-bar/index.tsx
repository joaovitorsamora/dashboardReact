import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface GroupedProps {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string[]
      stack: string
    }[]
  }
  options: {
    maintainAspectRatio: boolean
  }
  width: number
  height: number
}

export const GroupedComponent: React.FC<GroupedProps> = ({ data, options, width, height, ...props }) => {
  return <Bar data={data} options={options} width={width} height={height} {...props} />
}
