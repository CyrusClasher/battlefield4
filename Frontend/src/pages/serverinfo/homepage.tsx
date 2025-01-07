import { Img } from "@/components/ui/Img";
import ScrollSection from "./scrollSection";
import PopSidebar from "./popSidebar";

// import {} from "./index"
const HomePage: React.FC = () => {
  return (
    <div className="w-mod-js wf-rajdhani-n6-active w-mod-ix wf-rajdhani-n5-active wf-rajdhani-n7-active wf-opensans-n6-active wf-opensans-n8-active wf-opensans-n4-active wf-opensans-n7-active wf-opensans-n3-active wf-opensans-i8-active wf-opensans-i6-active wf-opensans-i4-active wf-opensans-i3-active wf-opensans-i7-active wf-rajdhani-n4-active wf-active">
      <PopSidebar />
      <div className="absolute inset-0 pt-[3vh] pb-0 pl-[12vh] bg-[linear-gradient(rgba(16,16,16,0.6),rgba(16,16,16,0.6)),url(https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601abb0b487fc1bfc56a1c3b_menu__background-30blur.jpg)] bg-[position:0_0,-70vh_-20vh] bg-[size:auto,360vh]">
        <div className="text-white tracking-[0.1vh] uppercase mb-[0.3vh] mr-[1.5vh] font-rajdhani text-[1.5vh] font-semibold leading-[2vh] no-underline transition-opacity duration-100 flex">
          <Img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg"
            loading="lazy"
            alt=""
            className="browser__breadcrumb-back"
          />
          <a className="text-white tracking-[0.1vh] uppercase mb-[0.3vh] mr-[1.5vh] font-rajdhani text-[1.5vh] font-semibold leading-[2vh] no-underline transition-opacity duration-100 flex">
            multiplayer
          </a>
          <div className="mr-[1.5vh] text-[2vh] font-medium">/</div>
          <a className="text-white tracking-[0.1vh] uppercase mb-[0.3vh] mr-[1.5vh] font-rajdhani text-[1.5vh] font-semibold leading-[2vh] no-underline transition-opacity duration-100 flex">
            server browser
          </a>
          <div className="mr-[1.5vh] text-[2vh] font-medium">/</div>
        </div>
        <div className="text-white uppercase font-rajdhani text-[4vh] font-semibold leading-[4vh]">
          Server Info
        </div>
        <div className="side-menu__bar z-2 w-[1px] h-screen bg-[rgba(255,255,255,0.15)] ml-[8vh] absolute top-0 bottom-0 left-0 right-auto"></div>
        <div className="z-[4] w-[1.4vh] h-[1.4vh] opacity-[.5] bg-[url('https://uploads-ssl.webflow.com/6013fff…/601aafa…_side-menu__quit.svg')] bg-center bg-no-repeat bg-cover justify-start items-center mt-[94.5vh] ml-[3vh] p-[1vh] no-underline transition-opacity duration-[0.1s] ease-[cubic-bezier(.455,.03,.515,.955)] flex fixed top-0 bottom-0 left-0 right-0">
          <div className="z-[5] opacity-0 bg-[#101010] flex-none ml-[4vh] p-[.3vh] [1vh] hidden">
            <div className="text-white text-center tracking-[0.07vh] uppercase font-rajdhani text-[1.3vh] font-medium leading-[1.5vh] no-underline">
              quit
            </div>
          </div>
        </div>

        <div className="z-[3] mt-[17vh] block fixed top-0 bottom-0 left-0 right-auto overflow-visible">
          <div className="z-30 mt-[17vh] block fixed top-0 bottom-0 left-0 right-auto overflow-visible">
            <a className="bg-cover bg-no-repeat bg-[url('images/side-menu__game1.png')] bg-[2vh] inline-block no-underline">
              dd
              <div className="z-5 opacity-0 bg-[#101010] flex-none ml-[7vh] py-[0.3vh] px-[1vh] hidden">
                <div className="text-white text-center tracking-[0.07vh] uppercase font-rajdhani text-[1.3vh] font-medium leading-[1.5vh] no-underline">
                  bvdsjdnjsndj
                </div>
              </div>
            </a>
            <a className="bg-[url('images/side-menu__game2.png')] bg-[2vh] bg-no-repeat bg-contain no-underline">
              dd
              <div className="z-5 opacity-0 bg-[#101010] flex-none ml-[7vh] py-[0.3vh] px-[1vh] hidden">
                <div className="text-white text-center tracking-[0.07vh] uppercase font-rajdhani text-[1.3vh] font-medium leading-[1.5vh] no-underline">
                  bvdsjdnjsndj
                </div>
              </div>
            </a>
            <a className="bg-[url('images/side-menu__game3.png')] bg-[2vh] bg-no-repeat bg-contain no-underline">
              dd
              <div className="z-5 opacity-0 bg-[#101010] flex-none ml-[7vh] py-[0.3vh] px-[1vh] hidden">
                <div className="text-white text-center tracking-[0.07vh] uppercase font-rajdhani text-[1.3vh] font-medium leading-[1.5vh] no-underline">
                  bvdsjdnjsndj
                </div>
              </div>
            </a>
            <a className="bg-[url('images/side-menu__game4.png')] bg-[2vh] bg-no-repeat bg-contain no-underline">
              lmnop
              <div className="w-[6vh] h-[3.5vh] opacity-50 cursor-none bg-transparent bg-[url('https://uploads-ssl.webflow.com/6013fff…/601aafa…_side-menu__watch.svg')] bg-[2vh] bg-no-repeat bg-contain border-l-[3px] border-transparent flex flex-row items-center justify-start mt-[2vh] p-0 no-underline transition-opacity duration-100 ease-[cubic-bezier(.455,.03,.515,.955)]">
                sndjnskdn
              </div>
            </a>
            <a className="w-[6vh] h-[3.2vh] opacity-50 bg-transparent bg-no-repeat bg-auto bg-[url('https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd71ff7186d1c97d5_side-menu__help.svg')] bg-[position:3vh] border-l-3 border-transparent justify-start items-center mt-[34vh] p-0 no-underline transition-opacity duration-100 ease-[cubic-bezier(.455,.03,.515,.955)] flex">
              <div className="side-menu__popup group z-5 opacity-0 bg-[#101010] flex-none ml-[7vh] p-[.3vh_1vh] hidden group-hover:block group-hover:opacity-100 transition-all duration-300">
                <div className="text-white text-center tracking-[.07vh] uppercase font-rajdhani text-[1.3vh] font-medium leading-[1.5vh] no-underline">
                  help
                </div>
              </div>
            </a>
          </div>
        </div>

        <ScrollSection></ScrollSection>
      </div>
    </div>
  );
};

export default HomePage;
