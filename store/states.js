import { atom } from "recoil";

export const currentMenuState = atom({
  key: "currentMenuState",
  default: "",
});

export const isMenuOpenState = atom({
  key: "isMenuOpenState",
  default: true,
});

export const myProjectState = atom({
  key: "myProjectState",
  default: [
    {
      name: "약속",
      color: "#9900F0",
    },
    {
      name: "약속",
      color: "#9900F0",
    },
    {
      name: "약속",
      color: "#9900F0",
    },
  ],
});

export const favoriteState = atom({
  key: "favoriteState",
  default: [
    {
      name: "약속",
      color: "#9900F0",
    },
    {
      name: "약속",
      color: "#9900F0",
    },
    {
      name: "약속",
      color: "#9900F0",
    },
  ],
});
