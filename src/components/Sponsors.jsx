
import {useAnimate } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

export default function Sponsors() {

    const [scope, animate] = useAnimate();
  const [isAnimating] = useState(true);

  const handleAnimation = useCallback(async () => {
    while (isAnimating) {
        await animate('#ani', { x: -70 }, { delay: 0.2, duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] });
        await animate('#ani', { x: -240 }, { delay: 0.2, duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] });
        await animate('#ani', { x: -350 }, { delay: 0.2, duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] });
        await animate('#ani', { x: 0 }, { delay: 0.2, duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] });
      }
  }, [animate, isAnimating]);
  
  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

    return (
        <div className="bg-brown-2 h-[411px] pt-12">
            
                <div ref={scope} className="grid grid-flow-col gap-36 items-center overflow-x-auto no-scrollbar pb-4">
                    <div id='ani' className=" w-[253px] h-[45px] bg-icon_1 bg-cover h-200px"></div>
                    <div id='ani' className="w-[253px] h-[50px] bg-icon_2 bg-cover"></div>
                    <div id='ani' className="w-[175px] h-[38px] bg-icon_3 bg-cover"></div>
                    <div id='ani' className="w-[80px] h-[80px] bg-icon_4 bg-cover"></div>
                    <div id='ani' className="w-[180px] h-[45px] bg-icon_5 bg-cover"></div>
                    <div id='ani' className="w-[120px] h-[50px] bg-icon_6 bg-cover"></div>
                </div>
            
        </div>
    )
}