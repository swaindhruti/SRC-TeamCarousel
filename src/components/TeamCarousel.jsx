// import { motion, useAnimate } from "framer-motion";
// import { useEffect, useState, useCallback } from "react";
import { teamMembers}  from "./Team_Sponsors_Cards";
import Marquee from "react-fast-marquee";

export default function TeamCard() {
  // const [scope, animate] = useAnimate();
  // const [isAnimating] = useState(true);

  // const handleAnimation = useCallback(async () => {
  //   while (isAnimating) {
  //     await animate(
  //       "#ani",
  //       { x: -337 },
  //       { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
  //     );
  //     await animate(
  //       "#ani",
  //       { x: -685 },
  //       { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
  //     );
  //     await animate(
  //       "#ani",
  //       { x: -1035 },
  //       { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
  //     );
  //     await animate(
  //       "#ani",
  //       { x: 0 },
  //       { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
  //     );
  //   }
  // }, [animate, isAnimating]);

  // useEffect(() => {
  //   handleAnimation();
  // }, [handleAnimation]);

  return (
    <div className="bg-brown-2 md:h-[700px]">
      <div className="font-poppins text-brown-4 text-[48px] font-bold md:text-[128px]">
        Meet the team
      </div>

      <Marquee className="grid grid-flow-col gap-4 overflow-x-auto no-scrollbar pb-4 gradie===">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              id="ani"
              className="bg-brown-5 h-[322px] w-[232px] md:h-[422px] md:w-[332px] flex flex-col items-center shadow-customShadow rounded-[16px] mr-3"
            >
              <div
                className={`h-[160px] w-[160px] mt-[32px] md:h-[240px] md:w-[240px] md:mt-[32px] bg-${member.pattern} bg-cover rounded-max`}
              ></div>
              <div className="flex flex-col mt-[32px]">
                <div className="text-brown-2 font-poppins font-bold text-[24px] md:text-[32px] flex justify-center">
                  {member.role}
                </div>
                <div className="text-brown-2 font-poppins font-bold md:text-[23px] flex justify-center">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
          </Marquee>
    </div>
  );
}
