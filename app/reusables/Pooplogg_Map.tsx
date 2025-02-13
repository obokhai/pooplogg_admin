"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
export default function Pooplogg_Map(){
  const [position, setPosition] = React.useState("surulere")
    return(
        <div className="mx-10 my-8">
          <div className="flex items-center space-x-8">
          <button className="bg-amber-400 text-[#025949] text-sm my-4 p-3 px-10 rounded-2xl">Discharge Zone Map</button>
            <div className="flex gap-4 items-center">
              <legend>Select Discharge Location</legend>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>Surulere <ChevronDown/></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Locations</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                      <DropdownMenuRadioItem value="ajah">Ajah</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="ikeja">Ikeja</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="lekki">Lekki</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="surulere">Surulere</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.014241896744!2d3.3272188670746887!3d6.489768932401413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c1aaf26ce7d%3A0x4d2fd698b58de1a3!2sSurulere%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736944166266!5m2!1sen!2sng" width={100} height={450} className="w-full h- rounded-xl" ></iframe>
 
        </div>
    )
}
