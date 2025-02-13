import { Plus } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import City_Dat_Card from "./City_Dat_Card"

export default function City_Dat(){
    return(
        <div className="mx-10 my-3">
            <div className="flex justify-between items-center">
                <div className="">
                    <p className="font-extralight">City Data</p>
                </div>
                <div className="flex space-x-10 ">
                    <div className="bg-[#fceeca]  flex px-5 py-1 rounded-full text-sm items-center gap-x-3">Add Local Government <span className="p-1 rounded-full bg-[#71491A] text-white"><Plus className="text-sm"/></span></div>
                    <div className="bg-[#E5EEFF] flex px-5 py-1 rounded-full text-sm items-center gap-x-2">Add Managers <span className="bg-sky-700 p-1 rounded-full text-white"><Plus/></span></div>
                </div>
            </div> 
            <div className="flex justify-between gap-x-5 my-3">
                <div className="w-[403px] bg-[#F5F5F5] space-y-6 p-3 rounded-xl text-sky-500">
                    <div className="w-full py-3">
                        <h3 className="text-lg font-semibold text-[#1D5177]">Onboarded</h3>
                        <p className="text-slate-500 font-extralight">Waste Infrastructure</p>
                    </div>
                    <p className="text-3xl font-extrabold text-[#0D42FF]">1000</p>
                </div>
                <City_Dat_Card top_title="Registered" bg_img="bg-[url(../app/assets/images/lga_pattern.png)]" subtitle="Local Government" left_num={400} bottom_right_badge="6 Added" bg_color="bg-[#1b4e73] " show_progress={true} />
                <City_Dat_Card top_title="City" partial_img="bg-[url(../app/assets/images/city_pattern.png)]" subtitle="Managers" left_num={20} bottom_right_badge="6 Added"  bg_color="bg-[#0030dc]" show_progress={true}/>
                <City_Dat_Card top_title="Wallet" subtitle="Balance" bg_img="bg-[url(../app/assets/images/wallet_pattern.png)]"styles="" currency="NGN" left_num={300000} bg_repeat="bg-repeat-x" bottom_right_badge="67 %" bg_color="bg-[#25AE88]" />
            </div>
        </div>
    )
}