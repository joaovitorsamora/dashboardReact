import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import React from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutProps {
  data: {
    labels: string[]
    datasets: {
      label: string
      backgroundColor: string[]
      borderColor: string[]
      borderWidth: number
      data: number[]
    }[]
  }
  options: {
    maintainAspectRatio: boolean
  }
  width: number
  height: number
}

export const DoughnutComponent: React.FC<DoughnutProps> = ({ data, options, width, height, ...props }) => {
  return <Doughnut data={data} options={options} width={width} height={height} {...props} />
}
