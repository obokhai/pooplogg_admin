import Image from "next/image";
import { Badge } from "@/components/ui/badge"


import Lagos_Seal from "@/app/assets/images/Lagos_Seal 1.png"
import logo from "@/app/assets/images/logo twiscode 4.png"
import Ellipse_1 from "@/app/assets/images/Ellipse_1.png"
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between py-4 px-10">
      <div className="flex space-x-6">
        <Image src={logo} alt="Pooplogg" className="w-full"/>
        <Image src={Lagos_Seal} alt="Lagos Seal" className="h-12"/>
      </div>

      <div className="flex space-x-3">
      <Image  src={Ellipse_1} alt="Avatar" className="w-12 rounded-full"/>
      <span className="pt-3 flex">Hi, Ujay. <ChevronDown/></span>


      </div>
    </div>  
  );
}
