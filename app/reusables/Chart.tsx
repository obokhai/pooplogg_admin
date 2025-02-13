"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { LabelList } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { location: "Ikeja", projected_evacuation: 186, actual_evacuation: 80 },
  { location: "Bariga", projected_evacuation: 305, actual_evacuation: 200 },
  { location: "Gbagada", projected_evacuation: 237, actual_evacuation: 120 },
  { location: "Meran", projected_evacuation: 73, actual_evacuation: 190 },
  { location: "Lekki", projected_evacuation: 209, actual_evacuation: 130 },
  { location: "Ajah", projected_evacuation: 214, actual_evacuation: 140 },
]

const chartConfig = {
  actual_evacuation: {
    label: "Actual Evacuation",
    color: "#0FFF9A",
  },
  projected_evacuation: {
    label: "Projected Evacuation",
    color: "#F7FFD7",
  },
} satisfies ChartConfig

export default function Chart() {
  return (
    <div className=" -mb-12">
      <div className="-mt-12">
            <button className="bg-amber-400 text-[#025949] text-sm my-4 p-3 px-10 rounded-2xl">Data</button>
      </div>
    <ChartContainer config={chartConfig} className="h-[291px] w-full">
      <BarChart accessibilityLayer data={chartData}>
      <LabelList className="fill-[--color-projected_evacuation]"  />
      <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="projected_evacuation" fill="var(--color-projected_evacuation)" radius={4} />
        <Bar dataKey="actual_evacuation" fill="var(--color-actual_evacuation)" radius={4} />
      </BarChart>
    </ChartContainer>
    </div>
  )
}

{/* <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer> */}