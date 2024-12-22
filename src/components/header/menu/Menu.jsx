// import menuData from "./menu_data";

const menuData = [
  {
    mainMenuItem: "Store",
    mainMenuLink: "https://store.steampowered.com/",
    dropdown: [
      { subMenuItem: "Home", subMenuLink: "https://store.steampowered.com/" },
      {
        subMenuItem: "Discovery Queue",
        subMenuLink: "https://store.steampowered.com/explore/",
      },
      {
        subMenuItem: "Wishlist",
        subMenuLink:
          "https://store.steampowered.com/wishlist/profiles/76561199098983954/",
      },
      {
        subMenuItem: "Points Shop",
        subMenuLink: "https://store.steampowered.com/points/shop/",
      },
      {
        subMenuItem: "News",
        subMenuLink: "https://store.steampowered.com/news/",
      },
      {
        subMenuItem: "Stats",
        subMenuLink: "https://store.steampowered.com/charts",
      },
      {
        subMenuItem: "About",
        subMenuLink: "https://store.steampowered.com/about/",
      },
    ],
  },
  {
    mainMenuItem: "Community",
    mainMenuLink: "https://steamcommunity.com/",
    dropdown: [
      { subMenuItem: "Home", subMenuLink: "https://steamcommunity.com/" },
      {
        subMenuItem: "Discussions",
        subMenuLink: "https://steamcommunity.com/discussions/",
      },
      {
        subMenuItem: "Workshop",
        subMenuLink: "https://steamcommunity.com/workshop/",
      },
      {
        subMenuItem: "Market",
        subMenuLink: "https://steamcommunity.com/market/",
      },
      {
        subMenuItem: "Broadcasts",
        subMenuLink: "https://steamcommunity.com/?subsection=broadcasts",
      },
    ],
  },
  {
    mainMenuItem: "Laufey",
    mainMenuLink: "https://steamcommunity.com/profiles/76561199098983954/",
    dropdown: [
      { subMenuItem: "Home", subMenuLink: "https://store.steampowered.com/" },
      {
        subMenuItem: "Discovery Queue",
        subMenuLink: "https://store.steampowered.com/explore/",
      },
      {
        subMenuItem: "Wishlist",
        subMenuLink:
          "https://store.steampowered.com/wishlist/profiles/76561199098983954/",
      },
      {
        subMenuItem: "Points Shop",
        subMenuLink: "https://store.steampowered.com/points/shop/",
      },
      {
        subMenuItem: "News",
        subMenuLink: "https://store.steampowered.com/news/",
      },
      {
        subMenuItem: "Stats",
        subMenuLink: "https://store.steampowered.com/charts",
      },
      {
        subMenuItem: "About",
        subMenuLink: "https://store.steampowered.com/about/",
      },
    ],
  },
  {
    mainMenuItem: "Chat",
    mainMenuLink: "https://steamcommunity.com/chat/",
  },
  {
    mainMenuItem: "Support",
    mainMenuLink: "https://help.steampowered.com/en/",
  },
];

export const Menu = () => {
  return (
    <ul className="menu">
      {menuData.map((menuItem) => {
        return (
          <li>
            <a href={menuItem.mainMenuLink}>{menuItem.mainMenuItem}</a>
            <ul className="dropdown">
              {menuItem.dropdown?.map((subMenuItem) => {
                return (
                  <li>
                    <a href={subMenuItem.subMenuLink}>
                      {subMenuItem.subMenuItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
