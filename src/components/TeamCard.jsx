export default function TeamCard() {
  return (
    <div className="bg-brown-5 h-[422px] w-[332px] flex-col items-center shadow-customShadow rounded-[16px]">
        <div className="h-[240px] w-[240] flex justify-center">
          <img src="https://picsum.photos/500" alt="team" className="rounded-max mt-[32px]"/>
        </div>
        <div className="mt-[32px] flex-cols">
            <div className="text-brown-2 font-poppins font-bold text-[32px] flex justify-center">Sponsorship Head</div>
            <div className="text-brown-2 font-poppins font-bold text-[23px] flex justify-center">Mugdha</div>
        </div>
    </div>
  );
}
