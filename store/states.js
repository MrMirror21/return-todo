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
      color: { name: "퍼플", code: "#9254C8" },
      favorite: true,
    },
    {
      name: "할일",
      color: { name: "스카이 블루", code: "#4D96FF" },
      favorite: false,
    },
    {
      name: "리턴 프로젝트",
      color: { name: "그린", code: "#6BCB77" },
      favorite: true,
    },
  ],
});

export const favoriteState = atom({
  key: "favoriteState",
  default: [
    {
      name: "약속",
      color: { name: "퍼플", code: "#9254C8" },
      favorite: true,
    },
    {
      name: "할일",
      color: { name: "스카이 블루", code: "#4D96FF" },
      favorite: false,
    },
    {
      name: "리턴 프로젝트",
      color: { name: "그린", code: "#6BCB77" },
      favorite: true,
    },
  ],
});

export const colorPalette = atom({
  key: "colorPalette",
  default: [
    { name: "레드", code: "#FF6B6B" },
    { name: "오렌지", code: "#FDAF75" },
    { name: "옐로우", code: "#FFD93D" },
    { name: "그린", code: "#6BCB77" },
    { name: "틸", code: "#6EDCD9" },
    { name: "스카이 블루", code: "#4D96FF" },
    { name: "퍼플", code: "#9254C8" },
    { name: "핑크", code: "#E15FED" },
    { name: "챠콜", code: "#323232" },
    { name: "브라운", code: "#BE8C63" },
  ],
});
