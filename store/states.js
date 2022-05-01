import { atom } from "recoil";

export const currentMenuState = atom({
  key: "currentMenuState",
  default: "",
});

export const isMenuOpenState = atom({
  key: "isMenuOpenState",
  default: true,
});

export const isModalOpenState = atom({
  key: "isModalOpenState",
  default: false,
});

export const myProjectState = atom({
  key: "myProjectState",
  default: [
    {
      id: 12341234,
      name: "약속",
      color: { name: "퍼플", code: "#9254C8" },
      favorite: true,
    },
    {
      id: 12341233,
      name: "할일",
      color: { name: "스카이 블루", code: "#4D96FF" },
      favorite: false,
    },
    {
      id: 12341232,
      name: "리턴 프로젝트",
      color: { name: "그린", code: "#6BCB77" },
      favorite: true,
    },
  ],
});

export const myTaskState = atom({
  key: "myTaskState",
  default: [
    {
      id: 1234456567,
      name: "4/12 줌회의",
      color: { name: "퍼플", code: "#9254C8" },
      project: "약속",
      date: "2022-04-12",
    },
    {
      id: 1234456568,
      name: "신병 인솔",
      color: { name: "스카이 블루", code: "#4D96FF" },
      project: "할일",
      date: "2022-04-24",
    },
    {
      id: 1234456569,
      name: "투두 리스트",
      color: { name: "그린", code: "#6BCB77" },
      project: "리턴 프로젝트",
      date: "2022-04-27",
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

export const DayOfTheWeek = atom({
  key: "dayOfTheWeekState",
  default: [
    {name: "일", code: 0,},
    {name: "월", code: 1,},
    {name: "화", code: 2,},
    {name: "수", code: 3,},
    {name: "목", code: 4,},
    {name: "금", code: 5,},
    {name: "토", code: 6,}
  ]
})