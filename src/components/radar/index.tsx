import React from 'react'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface RadarProps {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string[]
      borderColor: string[]
      borderWidth: number
    }[]
  }
  options: {
    maintainAspectRatio: boolean
  }
  width: number
  height: number
}

export const RadarComponent: React.FC<RadarProps> = ({ data, options, width, height, ...props }) => {
  return <Radar data={data} options={options} width={width} height={height} {...props} />
}
