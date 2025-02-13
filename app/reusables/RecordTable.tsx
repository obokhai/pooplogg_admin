import poopdata from "@/app/constants"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function RecordTable() {
  return (
    <Table className="w-[771px]">
        <TableHeader className="">
          <TableRow className="text-xs">
            
            <TableHead className="text-sky-500 font-bold">Municipalities</TableHead>
            <TableHead className="text-sky-500 font-bold">Vol. Tanker Water Supplied</TableHead>
            <TableHead className="text-sky-500 font-bold">Vol. Sewage Evacuation</TableHead>
            <TableHead className="text-right text-sky-500 font-bold">Water Cycle Efficiency</TableHead>
            <TableHead className="text-right text-sky-500 font-bold">Revenue Earned</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody className="">
            {poopdata.map((data) =>(
                <TableRow key={data.lg} className="text-center border-none text-xs">
                <TableCell className="font-semibold text-sky-600 text-left text-xs"><span className="rounded-full me-2 bg-slate-700 p-2 text-blue-300 font-medium">{data.lg_short}</span>{data.lg}</TableCell>
                <TableCell className="text-xs">22,000L</TableCell>
                <TableCell className="text-xs">12,000L</TableCell>
                <TableCell className="text-xs"><span className={`rounded-2xl ${data.bg_color} p-2 `}>0.1%</span></TableCell>
                <TableCell className="text-xs">{data.revenue_earned}</TableCell>
              </TableRow>
            ))}          
            
        
        </TableBody>
      </Table>
  )
}
