import './index.css'
import { App } from './src/app'
const donats = [
  { date: '2016-01-08T13:44:00', sum: 4 },
  { date: '2016-01-08T22:13:28', sum: 20 },
  { date: '2016-01-08T17:57:35', sum: 3 },
  { date: '2016-01-08T20:09:11', sum: 1 },
]
const app = new App(donats)
