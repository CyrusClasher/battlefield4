// import React from "react";

const Sidebar = () => {
  const menuItems = [
    { name: "Battlefield V", href: "/game?tab=tab-bfv" },
    { name: "Battlefield 1", href: "/game?tab=tab-bf1" },
    { name: "Battlefield 4", href: "/game?tab=tab-bf4" },
    { name: "Battlefield Hardline", href: "/game?tab=tab-bfh" },
    { name: "Career", href: "/game?tab=tab-career" },
    { name: "Watch", href: "/game?tab=tab-watch" },
    { name: "News", href: "/game?tab=tab-news" },
    { name: "Help", href: "/game?tab=tab-help" },
  ];

  return (
    <div className="side-menu__tabs">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`side-menu__game side-menu__game--${item.name
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          <div className="side-menu__popup">
            <div className="side-menu__text">{item.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
