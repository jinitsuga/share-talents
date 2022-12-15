export interface Character {
  name: string;
  icon: string;
  color: string;
  text: string;
  key: number;
  value: string;
}

const classesData: Array<Character> = [
  {
    name: "Warrior",
    icon: "",
    color: "bg-warrior",
    text: "text-slate-900",
    key: 1,
    value: "warrior",
  },
  {
    name: "Warlock",
    icon: "",
    color: "bg-warlock",
    text: "text-slate-900",
    key: 2,
    value: "warlock",
  },
  {
    name: "Monk",
    icon: "",
    color: "bg-monk",
    text: "text-slate-900",
    key: 3,
    value: "monk",
  },
  {
    name: "Shaman",
    icon: "",
    color: "bg-shaman",
    text: "text-white",
    key: 4,
    value: "shaman",
  },
  {
    name: "Rogue",
    icon: "",
    color: "bg-rogue",
    text: "text-slate-900",
    key: 5,
    value: "rogue",
  },
  {
    name: "Priest",
    icon: "",
    color: "bg-priest",
    text: "text-slate-900",
    key: 6,
    value: "priest",
  },
  {
    name: "Demon Hunter",
    icon: "",
    color: "bg-dh",
    text: "text-white",
    key: 7,
    value: "dh",
  },
  {
    name: "Druid",
    icon: "",
    color: "bg-druid",
    text: "text-slate-900",
    key: 8,
    value: "druid",
  },
  {
    name: "Hunter",
    icon: "",
    color: "bg-hunter",
    text: "text-slate-900",
    key: 9,
    value: "hunter",
  },
  {
    name: "Mage",
    icon: "",
    color: "bg-mage",
    text: "text-slate-900",
    key: 10,
    value: "mage",
  },
  {
    name: "Death Knight",
    icon: "",
    color: "bg-dk",
    text: "text-white",
    key: 11,
    value: "dk",
  },
  {
    name: "Paladin",
    icon: "",
    color: "bg-paladin",
    text: "text-slate-900",
    key: 12,
    value: "paladin",
  },
  {
    name: "Evoker",
    icon: "",
    color: "bg-evoker",
    text: "text-slate-900",
    key: 13,
    value: "evoker",
  },
];

export { classesData };
