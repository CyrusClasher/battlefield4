import { Helmet } from "react-helmet";
// import React, { Suspense } from "react";
// import mapRotation from "pages/mapRotation"
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/Text";
import { Heading } from "@/components/ui/Heading";
import RegionDisplay from "@/components/RegionDisplay";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Img } from "@/components/ui/Img";
import img1 from "../../images/side-menu__game1.png";
import img2 from "../../images/arrowleft.svg";
import { Suspense } from "react";
import HomeIcon from "@/components/HomeStatusIcons";

// const regionSettingList = [
//   { regionLabel: "Region", regionVlaue: "europe-de" },
//   { regionLabel: "punkbuster", regionVlaue: "on" },
//   { regionLabel: "fairfight", regionVlaue: "on" },
//   { regionLabel: "password", regionVlaue: "off" },
//   { regionLabel: "preset", regionVlaue: "normal" },
// ];

const regionSettingList = [
  { label: "Region", value: "Europe - DE" },
  { label: "Punkbuster", value: "ON" },
  { label: "Fairfight", value: "ON" },
  { label: "Password", value: "OFF" },
  { label: "Preset", value: "Normal" },
];

const advancedSettingList = [
  { label: "Minimap", value: "ON" },
  { label: "Only Squad Leader Spawn", value: "OFF" },
  { label: "Vehicles", value: "ON" },
  { label: "Team Balance", value: "ON" },
  { label: "Minimap Spotting", value: "ON" },
  { label: "HUD", value: "ON" },
  { label: "3P Vehicle Cam", value: "ON" },
  { label: "Regenerative Health", value: "ON" },
  { label: "Kill Cam", value: "ON" },
  { label: "Friendly Fire", value: "OFF" },
  { label: "3D Spotting", value: "ON" },
  { label: "Enemy Name Tags", value: "ON" },
];

const rulesSettingList = [
  { label: "Tickets", value: "400" },
  { label: "Vehicle Spawn Delay", value: "25" },
  { label: "Bullet Damage", value: "100" },
  { label: "Kick After Team Kills", value: "5" },
  { label: "Player Health", value: "100" },
  { label: "Player Respawn Time", value: "100" },
  { label: "Kick After Idle", value: "300" },
  { label: "Ban After Kicks", value: "3" },
];

export default function ServerInfo() {
  return (
    <>
      <Helmet>
        <title>Serverw Info</title>
        <meta name="description" content="Server Info" />
      </Helmet>
      <div className="h-[1916px] w-full bg-white-0 bg-[url(images/menu__background-30blur.jpg)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
        <div className="flex h-[1916px] items-center bg-[url(images/-30blur.jpg)] bg-cover bg-no-repeat py-9 lg:h-auto md:h-auto sm:py-4">
          <div className="mx-auto mb-[82px] flex w-full max-w-[1934px] items-start lg:px-5 md:flex-col md:px-5">
            <div className="mt-[170px] flex w-[6%] flex-col gap-[324px] lg:gap-[243px] md:w-full md:gap-[243px] sm:gap-[162px]">
              <div className="mr-[62px] flex flex-col gap-4 md:mr-0 md:flex-row sm:flex-col">
                <Img
                  src={img1}
                  alt="Sidemenugame"
                  className="ml-[18px] h-[48px] object-cover opacity-50 md:ml-0 sm:w-full"
                />
                <Img
                  src={img1}
                  alt="Sidemenugame"
                  className="ml-[18px] h-[48px] object-cover opacity-50 md:ml-0 sm:w-full"
                />
                <div className="flex flex-1 justify-center gap-3.5 self-stretch">
                  <Separator
                    orientation="vertical"
                    className="h-[48px] w-[3px] bg-orange-600"
                  />
                  <Img
                    src={img1}
                    alt="Sidemenugame"
                    className="h-[48px] object-cover opacity-50"
                  />
                </div>
                <Img
                  src={img1}
                  alt="Sidemenugame"
                  className="ml-[18px] h-[48px] object-cover opacity-50 md:ml-0 sm:w-full"
                />
                <Img
                  src={img1}
                  alt="Sidemenugame"
                  className="ml-[18px] h-[48px] object-cover opacity-50 md:ml-0 sm:w-full"
                />
                <Img
                  src={img1}
                  alt="Vector"
                  className="ml-5 h-[32px] md:ml-0 sm:w-full"
                />
                <Img
                  src="images/side-menu__game1.png"
                  alt="Megaphone"
                  className="ml-[22px] h-[30px] md:ml-0 sm:w-full"
                />
              </div>
              <div className="flex flex-col items-end gap-6">
                <Img
                  src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg"
                  alt="Television"
                  className="h-[22px] w-[74%] object-contain"
                />
                <Img
                  src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg"
                  alt="Television"
                  className="h-[22px] w-[74%] object-contain"
                />
              </div>
            </div>
            <div className="flex-1 self-center md:self-stretch">
              <div className="mr-[68px] flex flex-col gap-9 md:mr-0">
                <div className="ml-1 flex items-start md:ml-0 md:flex-col">
                  <div className="flex flex-1 flex-col gap-[258px] self-center lg:gap-[193px] md:gap-[193px] md:self-stretch sm:gap-[129px]">
                    <div className="flex flex-col items-start">
                      <div className="relative z-[1] flex items-center self-stretch">
                        <Img
                          src={img2}
                          alt="Arrowleft"
                          className="mb-1.5 h-[14px] self-end"
                        />
                        <Breadcrumb>
                          <BreadcrumbList className="flex w-[22%] item-center justify-between gap-3">
                            <BreadcrumbItem>
                              <BreadcrumbLink asChild>
                                <a href="#">
                                  <div className="flex">
                                    <Heading
                                      as="h1"
                                      className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                                    >
                                      multiplayer
                                    </Heading>
                                  </div>
                                </a>
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                              <Text className="h-[31px] w-[10px] text-[24px] font-medium uppercase tracking-[1.44px] !text-white-1 lg:text-[20px]">
                                /
                              </Text>
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                              <BreadcrumbPage>
                                <a href="#" className="lg:text-[15px]">
                                  <Heading
                                    as="h2"
                                    className="text-[18px] font semibold uppercase tracking-[1.08px]"
                                  >
                                    server browser
                                  </Heading>
                                </a>
                              </BreadcrumbPage>
                            </BreadcrumbItem>
                          </BreadcrumbList>
                        </Breadcrumb>
                        <Heading
                          size="texts"
                          as="h3"
                          className="ml-[18px] text-[24px] font-medium uppercase tracking-[1.44px] !text-white-1 lg:text-[20px]"
                        >
                          /
                        </Heading>
                      </div>
                      <div className="server__info-w">
                        <div className="server__name">! RC3-BASEMAPS</div>
                        <div className="server__info">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg"
                            className="server__flag"
                          />
                          <div className="server__mode">conquest large</div>
                          <div className="server__linfo-line">-</div>
                          <div className="server__game">Lancang Dam</div>
                          <div className="server__linfo-line">-</div>
                          <div className="server__preset">Custom</div>
                          <div className="server__linfo-line">-</div>
                          <div className="server__no-hz">60</div>
                          <div className="server__hz">hz</div>
                        </div>
                        <div className="server__desc">
                          Server protected by The_K-50 AntiCheat. Vip !Rules,
                          Questions, Request, Appeal, Visit us: www.epg.gg |
                          Discord https://discord.gg/3r5NK4d
                        </div>
                      </div>
                      <Heading
                        size="headinglg"
                        as="h4"
                        className="relative mt-[-4px] text-[46px] font-semibold uppercase tracking-[1.38px] lg:text-[39px] md:text-[30px] sm:text-[24px]"
                      >
                        server info
                      </Heading>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex md:flex-col">
                        <Button
                          shape="square"
                          className="w-full min-w-[324px] max-w-[324px] !border px-[33px] tracking-[1.08px] sm:px-4"
                        >
                          join
                        </Button>
                        <Button
                          shape="square"
                          className="ml-2 w-full min-w-[324px] max-w-[324px] !border px-[33px] tracking-[1.08px] md:ml-0 sm:px-4"
                        >
                          spectate
                        </Button>
                        <Button
                          shape="square"
                          className="ml-2 w-full min-w-[324px] max-w-[324px] !border px-[33px] tracking-[1.08px] md:ml-0 sm:px-4"
                        >
                          join as commander
                        </Button>
                        <div className="ml-2 flex w-[12%] items-center justify-center gap-0.5 border border-solid border-white-a700_33 p-3.5 md:ml-0 md:w-full">
                          <Img
                            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1b8ba5feb6d6e9bb7f6_favorites%20-%20black.svg"
                            alt="Favorite"
                            className="h-[24px] w-[18%] object contain"
                          />
                          <Heading
                            as="h5"
                            className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                          >
                            13672
                          </Heading>
                        </div>
                      </div>
                      <div className="flex justify-center gap-8">
                        {/* Players Section */}
                        <div className="flex flex-col items-start">
                          <Heading
                            as="h6"
                            className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                          >
                            players
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h3"
                            className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                          >
                            64/64
                          </Heading>
                        </div>

                        {/* Ping Section */}
                        <div className="flex flex-col items-start">
                          <Heading
                            as="h6"
                            className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                          >
                            ping
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h3"
                            className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                          >
                            104ms
                          </Heading>
                        </div>

                        {/* Tickrate Section */}
                        <div className="flex flex-col items-start">
                          <Heading
                            as="h6"
                            className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                          >
                            tickrate
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h3"
                            className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                          >
                            60Hz
                          </Heading>
                        </div>
                      </div>

                      {/* <div className="flex justify-center">
                        <div className="flex flex-col items-start">
                          <Heading
                            as="h6"
                            className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                          >
                            players
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h3"
                            className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                          >
                            64/64
                          </Heading>
                        </div>
                        <div className="flex flex-col items-start">
                          <Heading
                            as="h6"
                            className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                          >
                            ping
                          </Heading>
                          <Heading
                            as="h6"
                            className="text-[30px] font-semibold tracking-[1.80px] lg:text-[25px] md:text-[24px] sm:text-[22px]"
                          >
                            47ms
                          </Heading>
                          <div className="flex flex-1 flex-col items-start pl-[72px] pr-14 lg:pl-8 md:px-5 sm:px-4">
                            <Heading
                              as="h6"
                              className="text-[18px] font-semibold uppercase tracking-[1.08px] lg:text-[15px]"
                            >
                              tickrate
                            </Heading>
                          </div>
                        </div>
                      </div> */}
                      <div className="flex items-start gap-3 md:flex-col">
                        <div className="flex w-[22%] flex-col items-start gap-1.5 md:w-full">
                          <Heading
                            as="h6"
                            className="ml-4 text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px] md:ml-0"
                          >
                            settings
                          </Heading>
                          <div className="flex flex-col self-stretch">
                            <Suspense fallback={<div>Loading feed....</div>}>
                              {regionSettingList.map((d, index) => (
                                <RegionDisplay
                                  {...d}
                                  key={"listregion" + index}
                                />
                              ))}
                            </Suspense>
                          </div>
                        </div>
                        <div className="flex w-[24%] flex-col items-start">
                          <Heading
                            as="h6"
                            className="ml-[30px] text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px] md:ml-0"
                          >
                            advanced
                          </Heading>
                          <div className="ml-3 flex flex-col self-stretch md:ml-0">
                            <Suspense fallback={<div>Loading feed....</div>}>
                              {advancedSettingList.map((d, index) => (
                                <RegionDisplay
                                  {...d}
                                  key={"listminimap" + index}
                                />
                              ))}
                            </Suspense>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start gap-2 px-3.5 md:self-stretch">
                          <Heading
                            as="h6"
                            className="ml-4 text-[18px] font-semibold uppercase tracking-[1.26px] lg:text-[15px] md:ml-0"
                          >
                            rules
                          </Heading>
                          <div className="mr-96 flex flex-col self-stretch md:mr-0">
                            <Suspense fallback={<div>Loading feed....</div>}>
                              {rulesSettingList.map((d, index) => (
                                <RegionDisplay
                                  {...d}
                                  key={"ruleslist" + index}
                                />
                              ))}
                            </Suspense>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <HomeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
