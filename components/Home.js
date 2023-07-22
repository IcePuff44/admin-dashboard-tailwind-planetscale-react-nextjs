import React from "react";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Card from "./Card";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const data = [
  {
    id: 1,
    title: "A",
    value: "1,000,000",
    percent: "-15%",
    //main: true
  },
  {
    id: 2,
    title: "B",
    value: "100,000",
    percent: "-30%",
  },
  {
    id: 3,
    title: "C",
    value: "10,000",
    percent: "0.00",
  },
  {
    id: 4,
    title: "D",
    value: "1,000",
    percent: "+0.6%",
    extra: "From 4.6% ",
  },
];

const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  return (
    <div className={inter.className}>
      <div className="w-full bg-gray-100 h-fit pb-8">
        <Navbar />
        <div>
          <div className="flex flex-row space-x-4 px-6 py-6">
            {data?.map((item) => (
              <Card 
                key={item.id}
                title={item.title}
                value={item.value}
                percent={item.percent}
                extra={item.extra}
                main={item.main}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row pr-6">
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
