"use client";
import { useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ReferenceDot,
} from "recharts";

export function HourSpent() {
  const data = [
    {
      month: "Jan",
      study: 35,
      exam: 30,
    },
    {
      month: "Feb",
      study: 20,
      exam: 10,
    },
    {
      month: "Mar",
      study: 63,
      exam: 8,
    },
    {
      month: "Apr",
      study: 23,
      exam: 10,
    },
    {
      month: "May",
      study: 33,
      exam: 23,
    },
    {
      month: "Jun",
      study: 42,
      exam: 23,
    },
    {
      month: "Jul",
      study: 35,
      exam: 15,
    },
    {
      month: "Aug",
      study: 23,
      exam: 17,
    },
  ];

  return (
    <div className="w-full rounded-lg border border-[#E5E7E9] bg-white py-4 pr-5">
      <div className="mb-3 flex flex-wrap gap-4 px-5 text-xs text-[#999999]">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-[#FF9053]"></div>
          <p>Study</p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-[#F8EFE2]"></div>
          <p>Exams</p>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={325}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray={"5 5"}
            strokeWidth={"2"}
            vertical={false}
          />
          <XAxis
            stroke="#85878D"
            dataKey={"month"}
            axisLine={false}
            tickLine={false}
            tickSize={15}
            tick={{ fontSize: 13, fontFamily: "Montserrat", fontWeight: 400 }}
          />
          <YAxis
            stroke="#85878D"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value} Hr`}
            tick={{ fontSize: 13, fontFamily: "Montserrat", fontWeight: 400 }}
          />
          <Bar
            barSize={55}
            dataKey={"study"}
            fill="#FF9053"
            stackId={1}
            radius={[0, 0, 10, 10]}
          />
          <Bar
            dataKey={"exam"}
            fill="#F8EFE2"
            stackId={1}
            radius={[10, 10, 0, 0]}
          />
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              return active && payload?.length ? (
                <div className="rounded-md bg-[#1F1C3B] px-3 py-2 text-xs text-white">
                  <div>
                    <div className="mb-2 flex gap-3">
                      <div className="h-4 w-4 rounded bg-[#FF9053]"></div>
                      <p>{payload[0].value} Hr</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-4 w-4 rounded bg-[#F8EFE2]"></div>
                      <p>{payload[1].value} Hr</p>
                    </div>
                  </div>
                </div>
              ) : null;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Performance() {
  const maxPoints = 15;
  const pointProgress = 8.966;
  const circleSize = 300;
  const endAngle = -40;
  const startAngle = 220;

  useEffect(() => {});

  return (
    <div className="relative w-full rounded-lg border border-[#E5E7E9] bg-white py-4">
      <div className="mb-3 flex flex-wrap justify-between gap-4 px-5 text-xs text-[#999999]">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-[#45A8A3]"></div>
          <p className="text-xs text-[#42404C]">Point Progress</p>
        </div>
        <button className="flex items-center gap-2 rounded bg-[#EFF1F3] px-2.5 py-1.5 hover:cursor-pointer">
          <p>Monthly</p>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6.5L8 10.5L12 6.5"
              stroke="#82888F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <ResponsiveContainer height={300} width={"100%"}>
        <RadialBarChart
          id="radialChart"
          startAngle={startAngle}
          endAngle={endAngle}
          data={[{ pointProgress }]}
          innerRadius={"85%"}
          outerRadius={"100%"}
        >
          <RadialBar
            id="radialBar"
            dataKey={"pointProgress"}
            fill="#45A8A3"
            background={{ fill: "#F8EFE2" }}
            cornerRadius={circleSize / 2}
          />
          <PolarAngleAxis type="number" domain={[0, maxPoints]} tick={false} />
        </RadialBarChart>
      </ResponsiveContainer>

      <div
        id="needle"
        className="absolute right-[50%] bottom-[32%] z-10 w-[min(24px,7%)] origin-[50%_84%] translate-x-[50%] -rotate-[110deg] overflow-hidden pt-1"
      >
        <div className="clip-triangle relative mx-auto mb-1 aspect-[1/3.5] w-[70%] bg-gradient-to-b from-[#FF9053] to-[#FF905300]"></div>
        <div className="relative flex aspect-square items-center justify-center rounded-full bg-[#FF9053]">
          <div className="aspect-square w-[60%] rounded-full bg-white"></div>
        </div>
      </div>

      <p className="relative -mt-[12px] text-center text-xs text-[#83868E]">
        <span className="relative bottom-0.5 mr-2">Your point:</span>
        <span className="text-base text-black">{pointProgress}</span>
      </p>
    </div>
  );
}
