import { Img } from "@/components/ui/Img";
import "../styles/popSidebar.css";
// import React from "react";

export default function popSidebar() {
  return (
    <div className="hover-transform z-[9995] w-[27vh] h-screen bg-transparent flex flex-col justify-start pt-[3.5vh] pl-[1.5vh] fixed top-0 bottom-0 right-0 transform translate-x-[19vh]">
      <div className="invite__line h-px opacity-0 bg-white/10"></div>
      <div className="bg-transparent translate-x-[19vh] scale-[1] rotate-x-[0deg] rotate-y-[0deg] rotate-z-[0deg] skew-x-[0deg] skew-y-[0deg] transform preserve-3d background-color: rgba(0, 0, 0, 0); transform: translate3d(19vh, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
        <div className="mt-[1.2vh] mb-[1.5vh]">
          <div className="flex justify-start items-center mb-[1vh]">
            <Img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
              loading="lazy"
              alt=""
              className="invite__squad-icon mr-[0.5vh]"
            />
            <div className="invite__squad-h opacity-0 text-white tracking-[0.08vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              Squad
            </div>
          </div>
          <div className="flex justify-start items-center">
            <Img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"
              loading="lazy"
              alt=""
              className="invite__join-icon invite__join-icon--black z-2 -ml-px hidden absolute"
            />
            <Img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"
              loading="lazy"
              alt=""
              className="invite__join-icon invite__join-icon--default"
            />
            <div className="invite__join-h opacity-0 text-white tracking-[0.08vh] capitalize font-rajdhani text-[1.2vh] font-semibold leading-[1.6vh]">
              squad join
            </div>
          </div>
        </div>
      </div>
      <div className="invite__line h-px opacity-0 bg-white/10"></div>
      <div className="invite__online mt-[1.2vh] mb-[1.2vh]">
        <div className="flex justify-start items-center mb-[1vh]">
          <Img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
            loading="lazy"
            alt=""
            className="invite__online-icon"
          />
        </div>
        <div className="invite__online-h opacity-0 text-white tracking-[0.08vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
          <div className="invite__friend-picture-w flex flex-row justify-start items-center">
            <div className="w-[2px] h-[4.6vh] bg-[#23c13a] mr-[0.3vh]"></div>
            <Img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
              loading="lazy"
              alt=""
              className="invite__friend-picture"
            />
          </div>
          <div className="invite__friend-info flex flex-col flex-1 justify-center items-start h-[4.6vh] opacity-0 pl-[1vh]">
            <div className="invite__friend-name text-white tracking-[0.08vh] capitalize font-rajdhani text-[1.2vh] font-semibold leading-[1.6vh]">
              -- Content here --
            </div>
            <div className="text-[rgba(255,255,255,0.7)] tracking-[0.08vh] capitalize font-rajdhani text-[1.2vh] font-semibold leading-[1.6vh]">
              Online
            </div>
          </div>
        </div>
      </div>
      <div className="invite__line h-px opacity-0 bg-white/10"></div>
      <div className="invite__offline mt-[1.2vh] mb-[1.2vh]">
        <div className="invite__offline-h-w flex justify-start items-center mb-[1vh]">
          <Img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
            loading="lazy"
            alt=""
            className="invite__offline-icon mt-[0.5vh]"
          />
          <div className="opacity-0 text-white tracking-[0.08vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
            Offline
          </div>
        </div>
        <div className="invite__offline-friend opacity-[0.4] flex justify-start items-center">
          <div className="invite__friend-picture-w flex flex-row justify-start items-center">
            <div className="w-[2px] h-[4.6vh] bg-white mr-[0.3vh]"></div>
            {/* <div className="w-[2px] h-[4.6vh] bg-[#23c13a] mr-[0.3vh]"></div> */}
            <Img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
              loading="lazy"
              alt=""
              className="invite__friend-picture"
            />
          </div>
          <div className="invite__friend-info flex flex-col flex-1 justify-center items-start h-[4.6vh] opacity-0 pl-[1vh]">
            <div className="invite__friend-name text-white tracking-[0.08vh] capitalize font-rajdhani text-[1.2vh] font-semibold leading-[1.6vh]">
              420
            </div>
            <div className="invite__friend-name text-[rgba(255,255,255,0.7)] tracking-[0.08vh] capitalize font-rajdhani text-[1.2vh] font-semibold leading-[1.6vh]">
              Offline
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div data-w-id="6b37c036-931c-d490-861f-6b059f982253" className="invite">
    //   <div className="invite__line"></div>
    //   <div className="invite__squad">
    //     <div className="invite__squad-h-w">
    //       <Img
    //         src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg"
    //         loading="lazy"
    //         alt=""
    //         className="invite__squad-icon"
    //       />
    //       <div className="invite__squad-h">squad</div>
    //     </div>
    //     <div
    //       data-w-id="6b37c036-931c-d490-861f-6b059f98225a"
    //       className="invite__join-w"
    //     >
    //       <Img
    //         src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg"
    //         loading="lazy"
    //         alt=""
    //         className="invite__join-icon invite__join-icon--black"
    //       />
    //       <Img
    //         src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg"
    //         loading="lazy"
    //         alt=""
    //         className="invite__join-icon invite__join-icon--default"
    //       />
    //       <div className="invite__join-h">squad join</div>
    //     </div>
    //   </div>
    //   <div className="invite__line"></div>
    //   <div className="invite__online">
    //     <div className="invite__online-h-w">
    //       <Img
    //         src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg"
    //         loading="lazy"
    //         alt=""
    //         className="invite__online-icon"
    //       />
    //       <div className="invite__online-h">online</div>
    //     </div>
    //     <div
    //       data-w-id="6b37c036-931c-d490-861f-6b059f982265"
    //       className="invite__online-friend"
    //     >
    //       <div className="invite__friend-picture-w">
    //         <div className="invite__online-bar"></div>
    //         <Img
    //           src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
    //           loading="lazy"
    //           alt=""
    //           className="invite__friend-picture"
    //         />
    //       </div>
    //       <div className="invite__friend-info">
    //         <div className="invite__friend-name">MaryJane</div>
    //         <div className="invite__friend-status">Online</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="invite__line"></div>
    //   <div className="invite__offline">
    //     <div className="invite__offline-h-w">
    //       <Img
    //         src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg"
    //         loading="lazy"
    //         alt=""
    //         className="invite__offline-icon"
    //       />
    //       <div className="invite__offline-h">offline</div>
    //     </div>
    //     <div
    //       data-w-id="6b37c036-931c-d490-861f-6b059f982274"
    //       className="invite__offline-friend"
    //     >
    //       <div className="invite__friend-picture-w">
    //         <div className="invite__offline-bar"></div>
    //         <Img
    //           src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png"
    //           loading="lazy"
    //           alt=""
    //           className="invite__friend-picture"
    //         />
    //       </div>
    //       <div className="invite__friend-info">
    //         <div className="invite__friend-name">420</div>
    //         <div className="invite__friend-status">offline</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
