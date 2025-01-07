import React from "react";

const ServerInfo = () => {
  return (
    <div className="server">
      <div className="browser__breadcrumb">
        <div className="browser__breadcrumb-previous-1">
          <a
            href="/server-browser"
            className="browser__breadcrumb-back-w w-inline-block"
          >
            <img
              src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg"
              alt="Back"
              className="browser__breadcrumb-back"
            />
          </a>
          <a
            href="http://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-multiplayer"
            className="browser__breadcrumb-previous-1"
          >
            multiplayer
          </a>
          <div className="browser__breadcrumb-bar">/</div>
          <a href="/server-browser" className="browser__breadcrumb-previous-2">
            server Browser
          </a>
          <div className="browser__breadcrumb-bar">/</div>
        </div>
        <div className="browser__breadcrumb-h">server info</div>
      </div>

      <div className="server__info-w">
        <div className="server__name">! RC3-BASEMAPS</div>
        <div className="server__info">
          <img
            alt=""
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
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d
        </div>
      </div>

      <div className="server__buttons-w">
        <div className="server__button">
          <div className="server__button-text">join</div>
        </div>
        <div className="server__button">
          <div className="server__button-text">spectate</div>
        </div>
        <div className="server__button">
          <div className="server__button-text">join as commander</div>
        </div>
        <div className="server__button server__button--favorite">
          <img
            src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1b8ba5feb6d6e9bb7f6_favorites%20-%20black.svg"
            alt="Favorite"
            className="server__favorite server__favorite--black"
          />
          <div className="server__button-text">13672</div>
        </div>
      </div>

      <div className="server__current-stats-w">
        <div className="server__current-stats">
          <div className="server__current-stats-h">players</div>
          <div className="server__current-stats-i-w">
            <div className="server__current-stats-i">60</div>
            <div className="server__current-stats-iline">/</div>
            <div className="server__current-stats-i">64</div>
          </div>
        </div>
        <div className="server__current-stats">
          <div className="server__current-stats-h">ping</div>
          <div className="server__current-stats-i-w">
            <div className="server__current-stats-i">104</div>
            <div className="server__current-stats-ping">ms</div>
          </div>
        </div>
        <div className="server__current-stats">
          <div className="server__current-stats-h">tickrate</div>
          <div className="server__current-stats-i-w">
            <div className="server__current-stats-i">60</div>
            <div className="server__current-stats-hz">Hz</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
