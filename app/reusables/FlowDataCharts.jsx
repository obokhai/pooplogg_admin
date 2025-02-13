"use client"
import { BarChart, Bar, YAxis, Tooltip, Legend, ResponsiveContainer,CartesianGrid, Line, LineChart, XAxis, PolarAngleAxis, PolarGrid, Radar, RadarChart  } from 'recharts';
import { useState } from "react";

const categories = {
  flowData: {
    bgColor: "#0A6776",
    title: "Flow Data",
    cards: [
      { label: "Waste Water Flow", value: "22 mph" },
      { label: "Storm Water Flow", value: "22 mph" },
      { label: "Peak Flow", value: "22 mph" },
    ],
    chartTitle: "Flow Data Chart",
    chartLabels: ["Waste Water Flow", "Storm Water Flow", "Peak Flow"],
  },
  eventData: {
    bgColor: "#002D62",
    title: "Event Data",
    cards: [
      { label: "Storm Data", value: "22 mph" },
      { label: "Combined Sewer Overflow", value: "22 mph" },
      { label: "Flooding Incidents", value: "22 mph" },
    ],
    chartTitle: "Event Data Chart",
    chartLabels: ["Storm Data", "Combined Sewer Flow", "Flooding Incidents"],
  },
  energyData: {
    bgColor: "#0024FF",
    title: "Energy and Resource Management Data",
    cards: [
      { label: "Energy Consumption", value: "22 mph" },
      { label: "Waste and Byproduct Data", value: "22 mph" },
    ],
    chartTitle: "Energy and Resource Management Data",
    chartLabels: ["Energy Consumption", "Waste and Byproduct Data"],
  },
};


  
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { ChevronDown, TrendingUp } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"
const chartData = [
  { month: "January", waste : 186, storm: 80,peak: 200 },
  { month: "February", waste : 196, storm: 90,peak: 210 },
  { month: "March", waste : 166, storm: 60,peak: 220 },
  { month: "April", waste : 176, storm: 70,peak: 230 },
  { month: "May", waste : 126, storm: 120,peak: 240 },
  { month: "June", waste : 116, storm: 110,peak: 245 },
  { month: "July", waste : 136, storm: 100,peak: 260 },
  { month: "August", waste : 146, storm: 180,peak: 270 },
  { month: "September", waste : 156, storm: 130,peak: 280 },
  { month: "October", waste : 206, storm: 140,peak: 290 },
  { month: "November", waste : 216, storm: 189,peak: 190 },
  { month: "December", waste : 236, storm: 220,peak: 180 },
]

const chartConfig = {
    waste: {
      label: "Waste Water Flow",
      color: "#67E9F1",
    },
    storm: {
      label: "Storm Water Flow",
      color: "#FF62AE",
    },
    peak: {
      label: "Peak Flow",
      color: "#7E42FF",
    },
  }


import { CalendarDays, ChevronDownIcon } from "lucide-react"
import Vector from "../assets/images/Vector_png.png"
import GoogleMaps from "../assets/images/google-maps-1.png"
import Image from "next/image"

export default function FlowDataCharts() {
  const [selectedCategory, setSelectedCategory] = useState("flowData");


  return (
    <section className="mt-8 px-28 py-5" style={{ backgroundColor: categories[selectedCategory].bgColor }}>
        <div id='top_section' className='flex justify-between'>
            <button className='rounded-full border border-[#0380C6] text-[#0380C6] px-2 bg-white'>{categories[selectedCategory].title}</button>
            <div className='gap-x-2 flex items-center'>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="p-2 rounded-md border"
            >
              <option value="flowData">Flow Data</option>
              <option value="eventData">Event Data</option>
              <option value="energyData">Energy and Resource Management Data</option>
            </select>
            <CalendarDays className="text-white"/>
            </div>
        </div>
        <div className="flex justify-between mt-12" id="water_flow_section">
            <div className="flex border items-center pe-24 space-x-3 rounded-lg bg-white">
                <Image src={Vector} alt="" width={60} height={50} className='object-cover '/>
                <div className="flex-col gap-y-2 justify-center py-3 ">
                    <p>Waste Water Flow</p>
                    <div className="w-20 h-2 rounded-xl bg-[#0380C6]"/>
                    <p className="text-xl"><span className="font-bold ">22</span>mph</p>
                </div>
                <div className="flex gap-x-2 h-6 w-6 items-center">
                    <Image src={GoogleMaps} alt="" />
                    <p>Lagos</p>
                </div>
            </div>
            <div className="flex border items-center pe-24 space-x-3 rounded-lg bg-white">
                <Image src={Vector} alt="" width={60} height={50} />
                <div className="flex-col gap-y-2 justify-center py-3 ">
                    <p>Waste Water Flow</p>
                    <div className="w-20 h-2 rounded-xl bg-[#0380C6]"/>
                    <p className="text-xl"><span className="font-bold ">22</span>mph</p>
                </div>
                <div className="flex gap-x-2 h-6 w-6 items-center">
                    <Image src={GoogleMaps}  alt="" />
                    <p>Lagos</p>
                </div>
            </div>
            <div className="flex border items-center pe-24 space-x-3 rounded-lg bg-white">
                <Image src={Vector} alt="" width={60} height={50} />
                <div className="flex-col gap-y-2 justify-center py-3 ">
                    <p>Waste Water Flow</p>
                    <div className="w-20 h-2 rounded-xl bg-[#0380C6]"/>
                    <p className="text-xl"><span className="font-bold ">22</span>mph</p>
                </div>
                <div className="flex gap-x-2 h-6 w-6 items-center">
                    <Image src={GoogleMaps} alt="" />
                    <p>Lagos</p>
                </div>
            </div>
        </div>
        <div id="Flow_Data_Radar" className="flex mt-12 gap-x-20 items-center">
            <div className="w-2/4 min-h-52 " id="flow_data_chart">
            <Card>
                <CardHeader>
                    <CardTitle>Flow Data Chart</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}  
                    >
                        <ChartLegend content={<ChartLegendContent/>}/>
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                        dataKey="waste"
                        type="monotone"
                        stroke="var(--color-waste)"
                        strokeWidth={2}
                        dot={false}
                        />
                        <Line
                        dataKey="storm"
                        type="monotone"
                        stroke="var(--color-storm)"
                        strokeWidth={2}
                        dot={false}
                        />
                         <Line
                        dataKey="peak"
                        type="monotone"
                        stroke="var(--color-peak"
                        strokeWidth={2}
                        dot={false} />
                    </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                        </div>
                    </div>
                    </div>
                </CardFooter>
                </Card>
            </div>
            <div id="radar_data_chart" className="w-2/4 h-full">
            <Card>
                <CardHeader className="items-center pb-4">
                    <CardTitle className="flex gap-20 justify-between items-center"> Flow Radar Chart
                    <select name="cars" id="cars" className="text-sm font-light border-2 p-2 border-slate-300  rounded-2xl"><ChevronDown /> 
                        <option value="volvo">Select Category </option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                         </CardTitle>
                    <CardDescription>
                    Showing total visitors for the last 6 months
                    </CardDescription>
                </CardHeader>
                <CardContent className="pb-0">
                    <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                    >
                   <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid radialLines={false} polarRadius={[90]} strokeWidth={1} />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="waste"
              fill="var(--color-waste)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="peak"
              fill="var(--color-peak)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="storm"
              fill="var(--color-storm)"
              fillOpacity={0.6}
            />
          
                        {/* <Radar dataKey="storm" fill="var(--color-storm)" />
                        <Radar dataKey="peak" fill="var(--color-waste)" /> */}
                    </RadarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    January - June 2024
                    </div>
                </CardFooter>
            </Card>
            </div>
        </div>
        
    </section>
  )
}


