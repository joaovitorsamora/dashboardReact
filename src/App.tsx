import { DoughnutComponent, LineComponent, RadarComponent, GroupedComponent } from './components'
import axios from 'axios'

import './App.css'
import { useEffect, useState } from 'react'

type ExchangeRate = {
  fromCode: string
  fromName: string
  toCode: string
  toName: string
  rate: number
  lastRefreshed: string
  bid: number
  ask: number
}

type CurrencyKey = 'BTC' | 'ETH' | 'LTC'
type ExchangeRateMap = Record<CurrencyKey, number | null>

function App() {
  const [data, setData] = useState<ExchangeRate | null>(null)
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateMap>({
    BTC: null,
    ETH: null,
    LTC: null,
  })
  const apikey = import.meta.env.VITE_API_KEY
  const safe = (v: number | null) => v ?? 0
  const urlBtc = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=${apikey}`
  const urlEth = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=EUR&apikey=${apikey}`
  const urlLtc = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=LTC&to_currency=EUR&apikey=${apikey}`

  const max = Math.max(exchangeRate.BTC ?? 0, exchangeRate.ETH ?? 0, exchangeRate.LTC ?? 0)

  useEffect(() => {
    async function fecthData() {
      const [btcRes, ethRes, ltcRes] = await Promise.all([axios.get(urlBtc), axios.get(urlEth), axios.get(urlLtc)])
      const parseRate = (json: any) => {
        const r = json['Realtime Currency Exchange Rate']
        return Number(r['5. Exchange Rate'])
      }

      setExchangeRate({
        BTC: parseRate(btcRes.data),
        ETH: parseRate(ethRes.data),
        LTC: parseRate(ltcRes.data),
      })

      const r = btcRes.data['Realtime Currency Exchange Rate']

      setData({
        fromCode: r['1. From_Currency Code'],
        fromName: r['2. From_Currency Name'],
        toCode: r['3. To_Currency Code'],
        toName: r['4. To_Currency Name'],
        rate: r['5. Exchange Rate'],
        lastRefreshed: r['6. Last Refreshed'],
        bid: r['8. Bid Price'],
        ask: r['9. Ask Price'],
      })
    }
    fecthData()
  }, [])

  return (
    <div className="main">
      <div className="doughnut-container">
        <DoughnutComponent
          data={{
            labels: ['BTC', 'ETH', 'LTC'],
            datasets: [
              {
                label: 'Dataset Label',
                data: [safe(exchangeRate.BTC), safe(exchangeRate.ETH), safe(exchangeRate.LTC)],
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
                label: 'BTC',
                data: [
                  exchangeRate.BTC! * 0.95,
                  exchangeRate.BTC! * 0.97,
                  exchangeRate.BTC! * 0.96,
                  exchangeRate.BTC! * 0.99,
                  exchangeRate.BTC! * 1.01,
                  exchangeRate.BTC! * 0.98,
                  exchangeRate.BTC!,
                ],
                borderColor: ['rgb(255, 99, 132)'],
                backgroundColor: ['rgba(255, 99, 132, 0.5)'],
              },
              {
                label: 'ETH',
                data: [
                  exchangeRate.ETH! * 0.94,
                  exchangeRate.ETH! * 0.96,
                  exchangeRate.ETH! * 0.95,
                  exchangeRate.ETH! * 0.97,
                  exchangeRate.ETH! * 1.02,
                  exchangeRate.ETH! * 1.01,
                  exchangeRate.ETH!,
                ],
                borderColor: ['rgb(53, 162, 235)'],
                backgroundColor: ['rgba(53, 162, 235, 0.5)'],
              },
              {
                label: 'LTC',
                data: [
                  exchangeRate.LTC! * 0.93,
                  exchangeRate.LTC! * 0.95,
                  exchangeRate.LTC! * 0.96,
                  exchangeRate.LTC! * 0.98,
                  exchangeRate.LTC! * 1.0,
                  exchangeRate.LTC! * 1.02,
                  exchangeRate.LTC!,
                ],
                borderColor: ['rgb(223, 235, 53)'],
                backgroundColor: ['rgba(223, 235, 53, 0.5)'],
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
                label: 'BTC',
                data: [(exchangeRate.BTC ?? 0) / max],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
              },
              {
                label: 'ETH',
                data: [(exchangeRate.ETH ?? 0) / max],
                borderColor: ['rgb(53, 162, 235)'],
                backgroundColor: ['rgba(53, 162, 235, 0.5)'],
                borderWidth: 1,
              },
              {
                label: 'LTC',
                data: [(exchangeRate.LTC ?? 0) / max],
                borderColor: ['rgb(223, 235, 53)'],
                backgroundColor: ['rgba(223, 235, 53, 0.5)'],
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
                label: 'BTC - Preço em EUR',
                data: [
                  exchangeRate.BTC! * 0.95,
                  exchangeRate.BTC! * 0.97,
                  exchangeRate.BTC! * 0.96,
                  exchangeRate.BTC! * 0.99,
                  exchangeRate.BTC! * 1.01,
                  exchangeRate.BTC! * 0.98,
                  exchangeRate.BTC!,
                ],
                backgroundColor: ['rgb(255, 99, 132)'],
                stack: 'Stack 0',
              },
              {
                label: 'ETH - Preço em EUR',
                data: [
                  exchangeRate.ETH! * 0.94,
                  exchangeRate.ETH! * 0.96,
                  exchangeRate.ETH! * 0.95,
                  exchangeRate.ETH! * 0.97,
                  exchangeRate.ETH! * 1.02,
                  exchangeRate.ETH! * 1.01,
                  exchangeRate.ETH!,
                ],
                backgroundColor: ['rgb(75, 192, 192)'],
                stack: 'Stack 0',
              },
              {
                label: 'LTC - Preço em EUR',
                data: [
                  exchangeRate.LTC! * 0.93,
                  exchangeRate.LTC! * 0.95,
                  exchangeRate.LTC! * 0.96,
                  exchangeRate.LTC! * 0.98,
                  exchangeRate.LTC! * 1.0,
                  exchangeRate.LTC! * 1.02,
                  exchangeRate.LTC!,
                ],
                backgroundColor: ['rgb(223, 235, 53)'],
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
