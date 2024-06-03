import { motion, useAnimate } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { teamMembers}  from "./Team_Sponsors_Cards";

export default function TeamCard() {
  const [scope, animate] = useAnimate();
  const [isAnimating] = useState(true);

  const handleAnimation = useCallback(async () => {
    while (isAnimating) {
      await animate(
        "#ani",
        { x: -337 },
        { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
      );
      await animate(
        "#ani",
        { x: -685 },
        { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
      );
      await animate(
        "#ani",
        { x: -1035 },
        { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
      );
      await animate(
        "#ani",
        { x: 0 },
        { delay: 0.7, duration: 1, type: "spring", stiffness: 450 }
      );
    }
  }, [animate, isAnimating]);

  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  return (
    <div className="bg-brown-2 h-[700px]">
      <div className="font-poppins text-brown-4 text-[128px] font-bold">
        Meet the team
      </div>

      <motion.div
        ref={scope}
        className="grid grid-flow-col gap-4 overflow-x-auto no-scrollbar pb-4"
      >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              id="ani"
              className="bg-brown-5 h-[422px] w-[332px] flex flex-col items-center shadow-customShadow rounded-[16px] mr-2"
            >
              <div
                className={`h-[240px] w-[240px] mt-[32px] bg-${member.pattern} bg-cover rounded-max`}
              ></div>
              <div className="flex flex-col mt-[32px]">
                <div className="text-brown-2 font-poppins font-bold text-[32px] flex justify-center">
                  {member.role}
                </div>
                <div className="text-brown-2 font-poppins font-bold text-[23px] flex justify-center">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
}
