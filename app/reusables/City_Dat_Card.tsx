import * as React from "react"
interface Props {
    top_title: string;
    subtitle: string;
    left_num: number;
    bottom_right_badge: string;
    currency?:string;
    bg_color?: string;
    styles?:string;
    bg_img?:string;
    show_progress?:boolean;
    partial_img?:string;
    bg_repeat?:string
  }

const City_Dat_Card: React.FC<Props> = ({top_title, subtitle, bottom_right_badge,left_num,  currency, bg_repeat, bg_color, partial_img, bg_img, styles,show_progress}) =>{
    return(
        <div className={`flex-1 flex ${bg_color} w-[366px] px-6 text-white space-x-10 ${bg_img} ${bg_repeat}  justify-between rounded-2xl items-center`}>
                    <div className={`space-y-10 w-2/3 flex flex-col justify-between ${partial_img} py-4`}>
                        <div className={``}>
                            <h3 className="font-bold text-sm">{top_title}</h3>
                            <p className="text-xs font-light">{subtitle}</p>
                        </div>
                        <div className="w-full flex flex-1  ">
                            {show_progress ===true ? (
                                <div className="w-full h-2 rounded-2xl bg-white border shadow-xl">
                                    <div className={`w-[80%] h-2 rounded-full bg-green-500`}/>
                                </div>
                            )
                            :
                            (
                                <div className="h-2"></div>
                            ) }
                        </div>
                     </div>
                     
                     <div className="flex flex-col items-end gap-y-10 lg:w-60">
                        <p className=" ">{currency}<span className="text-xl font-extrabold text-white"> {left_num}</span></p>
                        <div className={`${styles} h-3`}>
                            <p className="font-light text-sm">Today <span className="bg-white text-sky-400 w-16 px-2 py-1 rounded-2xl">{bottom_right_badge}</span></p>
                        </div>
                     </div>
                </div>
    )
}
export default City_Dat_Card