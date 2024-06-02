import Marquee from "react-fast-marquee";

export default function Sponsors() {
    return (
        <div className="bg-brown-2 h-[411px] pt-12">
            <Marquee>
                <div className="grid grid-flow-col gap-36 items-center overflow-x-auto no-scrollbar pb-4">
                    <div className=" w-[253px] h-[45px] bg-icon_1 bg-cover h-200px"></div>
                    <div className="w-[253px] h-[50px] bg-icon_2 bg-cover"></div>
                    <div className="w-[175px] h-[38px] bg-icon_3 bg-cover"></div>
                    <div className="w-[80px] h-[80px] bg-icon_4 bg-cover"></div>
                    <div className="w-[180px] h-[45px] bg-icon_5 bg-cover"></div>
                    <div className="w-[120px] h-[50px] bg-icon_6 bg-cover"></div>
                </div>
            </Marquee>
        </div>
    )
};