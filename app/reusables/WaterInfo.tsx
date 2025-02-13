import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import water_info from '@/app/constants/water_info'
  
export default function WaterInfo(){
    return(
        <div className=" my-4 mx-10">
            <button className="bg-amber-400 text-[#025949] text-sm my-4 p-3 px-10 rounded-2xl">Portable | Waste Water Information</button>
            <div className="flex  space-x-6">
             {water_info.map((data) =>(
                
            <Card  className={`${data.bgcolor} w-1/6`} key={data.id}>
                <CardHeader >
                    <CardTitle className="">{data.water_info_text}</CardTitle>
                    
                </CardHeader>
                <CardContent className="">
                    <h1 className="text-3xl font-bold">{data.water_supplied_freq}<span className="text-sm font-light">.00</span></h1>
                    <p className="text-sm">Tonnes</p>
                    <div className="mt-6 space-y-4">
                        <div className="flex">
                            <div className="flex items-center space-x-3">
                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                <h3>Pooplogg <span> {data.poop_logg} </span></h3> 
                            </div>

                        </div>
                        <div className="mt-6 space-y-4">
                        <div className="flex">
                            <div className="flex space-x-3">
                                <div className="h-2 w-2 bg-green-500 rounded-full mt-2 "></div>
                                <h3>Actual Evacuation <span> {data.water_works} </span></h3> 
                            </div>

                        </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-end">
                  <button className={`${data.button_color} ${data.button_text_color} ps-4 pe-10 py-1 rounded-md text-left`}>{data.btn_text}</button>
                </CardFooter>
            </Card>
            
             ))}
             </div>
        </div>
    )
}