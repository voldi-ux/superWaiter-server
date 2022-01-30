/** @format */

import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { BiFoodMenu } from "react-icons/bi";
import { MdFastfood, MdHistory } from "react-icons/md";
import "./stats.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getStats } from "./util";
import {AppContext} from '../../context/appContext'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Yearly Income',
    },
  },
};
const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      },
      
    title: {
      display: true,
      text: ' Last Year Orders trend',
    },
  },
};
const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      },
      
    title: {
      display: true,
      text: ' weekly income',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November', 'December'];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'];

 const data = {
  labels,
  datasets: [
    {
      label: "last year monthly income",
      data: labels.map((item, index) => 150 * index + Math.floor(Math.random() * 1000)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "this year monthly income",
      data: labels.map((item, index) => 150 * index + Math.floor(Math.random() * 1000)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};


 const ordersTrend = {
  labels,
  datasets: [
    {
      label: "orders trend",
      data: labels.map((item, index) => 15 * index + Math.floor(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};
 const weeklyIncome = {
  labels:weekdays,
  datasets: [
    {
      label: "Weekly income",
      data: labels.map((item, index) => 15 * index + Math.floor(Math.random() * 1000)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};





const Stats = () => {
const {orders } = useContext(AppContext)

const {ordersInProgress,newOrders,totlaOrders} = getStats(orders)

  return (
    <main className="stats-container">
 
      <IconContext.Provider value={{ size: 50, color: "#fff", style: { marginRight: 10 } }}>
        <aside className="orders-overview">
          <div className="overview-item">
            <BiFoodMenu style={{ color: "#23bed4" }} />
            <div>
              <h1>{newOrders }</h1>
              <h2>new orders</h2>
            </div>
          </div>
          <div className="overview-item">
            <MdFastfood style={{ color: " #4f23d4" }} />
            <div>
              <h1>{ ordersInProgress}</h1>
              <h2>orders in progress</h2>
            </div>
          </div>
          <div className="overview-item">
            <MdHistory style={{ color: " #d42389" }} />
            <div>
              <h1>{ totlaOrders}</h1>
              <h2>total orders</h2>
            </div>
          </div>
        </aside>
      </IconContext.Provider>
      <div className="graphs-container">
        <div className="graph graph-1">
          <Line options={options} data={data} />
        </div>
        <div className="graph graph-2">
          <Line options={options3} data={weeklyIncome} />
        </div>
        <div className="graph graph-3">
          <Line options={options2} data={ordersTrend} />
        </div>
      </div>
    </main>
  );
};

export default Stats;
