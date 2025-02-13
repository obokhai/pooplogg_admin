import Image from "next/image";
import City_Dat from "./reusables/City_Dat";
import RecordTable from "./reusables/RecordTable";
import Chart from "./reusables/Chart";
import WaterInfo from "./reusables/WaterInfo";
import Maps from "./reusables/Pooplogg_Map";
import Pooplogg_Map from "./reusables/Pooplogg_Map";
import Pooplogg_LG_Data from "./reusables/Pooplogg_LG_Data";
import { StateData } from "./reusables/StateData";
import FlowDataCharts from "./reusables/FlowDataCharts"
export default function Home() {
  return (
    <div className="">
      <City_Dat/>
      <div className="flex flex-col">
      <div className="bg-[#EBFFFA] flex p-12 items-end space-x-24">  
        <div className="flex-1">
          <Chart/>
        </div>
        
        <div >
          <RecordTable/>
        </div>
        </div>
      </div>
      <div>
        <FlowDataCharts/>
      </div>
      
      <Pooplogg_Map/>
      <Pooplogg_LG_Data/>
      <StateData/>
    </div>
    
  );
}
