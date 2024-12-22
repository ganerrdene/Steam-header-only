import { Menu } from "./menu/Menu";
import { Action_menu } from "./action-menu/Action_menu";

// const Profile = () => {
//   const profile = {
//     nickname: "Laufey",
//     balance: 38.87,
//     picture:
//       "https://avatars.fastly.steamstatic.com/e5fe682441cd40d638010f6ec48314f669fb6caa.jpg",
//   };
//   return profile.nickname;
// };

const Header = () => {
  const logo =
    "https://community.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016";
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={logo} alt="Steam logo" />
      </a>
      <Menu />
      <Action_menu />
    </div>
  );
};

export default Header;
