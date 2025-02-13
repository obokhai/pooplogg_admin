import * as React from "react"
import Image from "next/image";
interface LG_Props {
    top_title: string;
    top_title_num: string;
    top_measurement: string;
    bottom_title: string;
    bottom_title_num: string;
    bottom_measurement: string;
    bg_color:string;
    text_color?:string;
    card_height?: string;
    icon_section?:string;
    alignment?:string;
    bottom_text_color?: string

  }

  const Card: React.FC<LG_Props> = ({card_height,alignment, icon_section, bg_color,text_color,top_title,bottom_text_color, top_title_num, top_measurement, bottom_title, bottom_title_num, bottom_measurement})  =>{
    return (
        <div className={`${bg_color} ${text_color} ${card_height} ${alignment} flex flex-col justify-between h-[300px] w-full p-6 rounded-xl`}>
            <div className="py-3">
                <h5 className="text-xs font-light font-slate-">{top_title}</h5>
                <h2 className="font-bold text-2xl">{top_title_num}</h2>
                <h5 className="text-xs font-light">{top_measurement}</h5>
            </div>
            <div className="">
                <h5 className="text-xs font-light">{bottom_title}</h5>
                <h2 className={`font-bold text-2xl ${bottom_text_color}`}>{bottom_title_num}</h2>
                <h5 className="text-xs font-light">{bottom_measurement}</h5>
                <span className="text-light"><Image src="/assets/images/caret.png" alt="" width={8.94} height={14.3} />{icon_section}</span>
            </div>
            
        </div>
    )
  }

  export default Card