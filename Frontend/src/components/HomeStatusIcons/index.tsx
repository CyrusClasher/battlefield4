import { Img } from "../ui/Img";
import im4 from "../../images/home__friend-picture-MaryJane.png";
import im5 from "../../images/home__friend-picture-420.png";
// import React from "react";
interface Props {
  className?: string;
}

export default function HomeIcon({ ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-end w-[18%] md:w-full mt-[22px] gap-[34px]`}
    >
      <div className="flex flex-col items-start gap-[18px]">
        {/* <Img src="" alt="Thumbsup" className="h-[10px]" /> */}
        <Img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
          loading="lazy"
          alt=""
          className="invite__squad-icon"
        />
        <Img
          src="/images/pluspic.png"
          alt="Plus"
          className="h-[50px] self-end"
        />
      </div>
      <div className="flex flex-col items-start gap-[18px]">
        <Img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
          loading="lazy"
          alt=""
          className="invite__online-icon"
        />
        {/* <Img src="" alt="Contrast" className="h-[10px]" /> */}
        <Img src={im4} alt="Lock" className="h-[50px] object-cover" />
      </div>
      <div className="flex w-[16%] flex-col items-start gap-[18px]">
        {/* <div className="h--[10px] w-[10px] rounded border-2 border-solid border-white-0" /> */}
        <Img
          src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
          loading="lazy"
          alt=""
          className="invite__offline-icon"
        />
        <Img src={im5} alt="Close" className="h-[50px] object-cover" />
      </div>
    </div>
  );
}
