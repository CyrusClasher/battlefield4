import { Img } from "@/components/ui/Img";
import "../styles/scrollsection.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import { } from "dotenv";

export default function scrollSection() {
  interface Setting {
    label: string;
    value: string;
  }

  interface RegionSetting {
    regionLabel: string;
    regionValue: string;
  }

  const [regionSettings, setRegionSettings] = useState<RegionSetting[]>([]);
  const [advancedSettings, setAdvancedSettings] = useState<Setting[]>([]);
  const [rulesSettings, setRulesSettings] = useState<Setting[]>([]);

  const fetchData = async () => {
    try {
      const regionResponse = await axios.get(
        `https://battlefield4-pied.vercel.app/api/region-settings`
      );
      setRegionSettings(regionResponse.data);

      const advancedResponse = await axios.get(
        `https://battlefield4-pied.vercel.app/api/advanced-settings`
      );
      setAdvancedSettings(advancedResponse.data);

      const rulesResponse = await axios.get(
        `https://battlefield4-pied.vercel.app/api/rules-settings`
      );
      setRulesSettings(rulesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  // Fetch data from the backend API
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="w-[127vh] h-[82.4vh] border-b border-white/10 mt-[8vh] relative overflow-auto">
        <div className="mb-[3vh]">
          <div className="text-white tracking-[0.1vh] mb-[1vh] font-rajdhani text-[3.1vh] font-semibold leading-[3.8vh]">
            RC3-Basemaps
          </div>
          <div className="mb-[1vh] flex">
            <div className="text-white/80 tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              Conquest Large
            </div>
            <div className="text-white/80 tracking-wider uppercase ml-[1vh] mr-[1vh] font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              -
            </div>
            <div className="text-white/80 tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              Lancang Dam
            </div>
          </div>
          <div className="w-[80vh] text-white/80 tracking-[0.08vh] font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
            server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
            Request, Appeal, Visit us: www.epg.gg | Discord
            https://discord.gg/3r5NK4d
          </div>
        </div>
        <div className="mb-[2vh] flex">
          <div className="animates w-[28vh] h-[4.8vh] border border-white/20 flex justify-center items-center mr-[1vh]">
            <div className="animates-child text-white text-center tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              Join
            </div>
          </div>
          <div className="animates w-[28vh] h-[4.8vh] border border-white/20 flex justify-center items-center mr-[1vh]">
            <div className="animates-child text-white text-center tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              Spectate
            </div>
          </div>
          <div className="animates w-[28vh] h-[4.8vh] border border-white/20 flex justify-center items-center mr-[1vh]">
            <div className="animates-child text-white text-center tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              Join as Commander
            </div>
          </div>
          <div className="server__button animates w-[28vh] h-[4.8vh] border border-white/20 flex justify-center items-center mr-[1vh]">
            <div className="server__button w-[14vh] pl-[2vh] relative">
              <div className="text-white text-center tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
                <div className="server__favorite w-[1.8vh] flex-none block absolute left-[3.5vh] z-[1]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1b8abc05e847f1ac43f_favorites%20-%20white.svg"
                    loading="lazy"
                    alt=""
                    className="server__favorite server__favorite--white block"
                  />
                </div>
                13672
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[2.5vh] flex">
          <div className="mr-[12vh]">
            <div className="text-white tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              players
            </div>
            <div className="flex">
              <div className="text-white tracking-[0.1vh] font-rajdhani text-[2.5vh] font-semibold leading-[3vh]">
                64
              </div>
              <div className="text-white tracking-[0.1vh] not-italic ml-[0.1vh] mr-[0.1vh] font-rajdhani text-[2.5vh] font-semibold leading-[3vh]">
                /
              </div>
              <div className="text-white tracking-[0.1vh] font-rajdhani text-[2.5vh] font-semibold leading-[3vh]">
                64
              </div>
            </div>
          </div>
          <div className="mr-[12vh]">
            <div className="text-white tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              ping
            </div>
            <div className="text-white tracking-[0.1vh] font-rajdhani text-[2.5vh] font-semibold leading-[3vh]">
              104
            </div>
            <div className="text-white tracking-[0.1vh] not-italic ml-[0.1vh] mr-[0.1vh] font-rajdhani text-[2.5vh] font-semibold leading-[3vh]">
              ms
            </div>
          </div>
          <div className="mr-[12vh]">
            <div className="text-white tracking-[0.1vh] uppercase font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              tickrate
            </div>
            <div className="text-white tracking-[0.1vh] font-rajdhani text-[2.5vh] font-semibold leading-[3vh]">
              60
            </div>
            <div className="text-white tracking-[0.1vh] ml-[0.5vh] mr-[0.1vh] font-rajdhani text-[2.5vh] font-semibold leading-[3vh]">
              Hz
            </div>
          </div>
        </div>
        <div className="mb-[3vh] flex">
          <div className="mr-[4vh]">
            <div className="text-white tracking-[0.1vh] uppercase mb-[1vh] font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              settings
            </div>
            {regionSettings.map((item, index) => (
              <div
                key={index}
                className="animates w-[28vh] border-b border-white/10 justify-between px-[2vh] py-[0.7vh] flex"
              >
                <div className="text-white tracking-[0.08vh] uppercase font-rajdhani text-[16px] font-medium">
                  {item.regionLabel}
                </div>
                <div className="text-white tracking-[0.08vh] uppercase font-rajdhani text-[16px] font-medium">
                  {item.regionValue}
                </div>
              </div>
            ))}
          </div>
          <div className="mr-[4vh]">
            <div className="text-white tracking-[0.1vh] uppercase mb-[1vh] font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              advanced
            </div>
            {advancedSettings.map((item, index) => (
              <div
                key={index}
                className="animates w-[28vh] border-b border-white/10 justify-between px-[2vh] py-[0.7vh] flex"
              >
                <div className="text-white tracking-[0.08vh] uppercase font-rajdhani text-[16px] font-medium">
                  {item.label}
                </div>
                <div className="text-white tracking-[0.08vh] uppercase font-rajdhani text-[16px] font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mr-[4vh]">
            <div className="text-white tracking-[0.1vh] uppercase mb-[1vh] font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
              rules
            </div>
            {rulesSettings.map((item, index) => (
              <div
                key={index}
                className="animates w-[28vh] border-b border-white/10 justify-between px-[2vh] py-[0.7vh] flex"
              >
                <div className="text-white tracking-[0.08vh] uppercase font-rajdhani text-[16px] font-medium">
                  {item.label}
                </div>
                <div className="text-white tracking-[0.08vh] uppercase font-rajdhani text-[16px] font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="text-white tracking-[0.1vh] uppercase mb-[1.5vh] font-rajdhani text-[1.5vh] font-semibold leading-[1.8vh]">
            map rotation
          </div>
          <div className="grid gap-[2vh] grid-rows-[auto_auto_auto_auto] grid-cols-4 auto-cols-fr">
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
            <div className="w-[28vh] h-[15.5vh] bg-[rgba(16,16,16,0.5)]">
              <div className="h-[7vh] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,rgba(0,0,0,0),#101010),linear-gradient(rgba(0,85,164,0.47),rgba(0,85,164,0.47))]">
                  <Img
                    src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
                    className="h-[8vh] max-w-[120%] -ml-[10%]"
                  />
                </div>
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mt-[2vh] mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                conquest large
              </div>
              <div className="text-white tracking-[0.1vh] uppercase mx-[2vh] font-rajdhani text-[1.6vh] font-bold leading-[2vh]">
                dawnbreaker
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
