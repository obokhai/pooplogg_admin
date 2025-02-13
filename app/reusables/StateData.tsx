import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import state_data from "../constants/state_data"
  
  export function StateData() {
    return (
        <div className="mx-10">
            <button className="bg-amber-400 text-[#025949] text-sm my-4 p-3 px-20 rounded-2xl">State Project</button>
            
      <Table >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="" >
          <TableRow className="bg-blue-700 text-white h-6 rounded-2xl ">
            <TableHead className=" text-white font-bold">Projects</TableHead>
            <TableHead className="text-white ">Projects Name</TableHead>
            <TableHead className="text-white ">Budget</TableHead>
            <TableHead className="text-right text-white">Date Of Comission</TableHead>
            <TableHead className="text-right text-white">Project By</TableHead>
            <TableHead className="text-right text-white">Partners</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {state_data.map((state) => (
            <TableRow key={state.projects} className="py-3">
              <TableCell className="font-medium text-lg p-4">{state.projects}<br/><span className="text-xs">{state.doc  }</span></TableCell>
              <TableCell>{state.project_name}</TableCell>
              <TableCell>{state.budget}</TableCell>
              <TableCell className="text-right">{state.doc}</TableCell>
              <TableCell className="text-right">{state.project_by}</TableCell>
              <TableCell className="text-right">{state.partners}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      </div>
    )
  }
  