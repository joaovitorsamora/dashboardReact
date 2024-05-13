import { DoughnutComponent, LineComponent, RadarComponent, GroupedComponent } from './components'
import './App.css'

function App() {
  return (
    <div className="main">
      <div className="doughnut-container">
        <DoughnutComponent
          data={{
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
              {
                label: 'Dataset Label',
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                borderColor: [],
                borderWidth: 1,
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
          width={125}
          height={125}
        />
      </div>
      <div className="line-container">
        <LineComponent
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [20, 40, 2, 41, 87, 12, 62, 32, 18, 27, 54, 10],
                borderColor: ['rgb(255, 99, 132)'],
                backgroundColor: ['rgba(255, 99, 132, 0.5)'],
              },
              {
                label: 'Dataset 2',
                data: [45, 32, 18, 27, 54, 10, 79],
                borderColor: ['rgb(53, 162, 235)'],
                backgroundColor: ['rgba(53, 162, 235, 0.5)'],
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
          width={500}
          height={300}
        />
      </div>
      <div className="radar-container">
        <RadarComponent
          data={{
            labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
            datasets: [
              {
                label: '# of Votes',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
          width={250}
          height={250}
        />
      </div>
      <div className="grouped-container">
        <GroupedComponent
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Dataset 1',
                data: [12, 25, 34, 17, 39, 58, 2],
                backgroundColor: ['rgb(255, 99, 132)'],
                stack: 'Stack 0',
              },
              {
                label: 'Dataset 2',
                data: [45, 75, 10, 24, 65, 87, 42],
                backgroundColor: ['rgb(75, 192, 192)'],
                stack: 'Stack 0',
              },
              {
                label: 'Dataset 3',
                data: [19, 42, 51, 27, 67, 12, 8],
                backgroundColor: ['rgb(53, 162, 235)'],
                stack: 'Stack 1',
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
          width={500}
          height={300}
        />
      </div>
    </div>
  )
}

export default App
