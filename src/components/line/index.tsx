import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import React from 'react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface LineProps {
  data: {
    labels: string[]
    datasets: {
      label: string
      backgroundColor: string[]
      borderColor: string[]
      data: number[]
    }[]
  }
  options: {
    maintainAspectRatio: boolean
  }
  width: number
  height: number
}

export const LineComponent: React.FC<LineProps> = ({ data, width, height, ...props }) => {
  return <Line data={data} width={width} height={height} {...props} />
}
