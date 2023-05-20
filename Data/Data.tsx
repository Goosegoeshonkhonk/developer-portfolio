import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  PersonalInfor,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
  { path: "/bao", label: "Hoàng Quốc Bảo" },
  { path: "/phong", label: "Phạm Tuấn Phong" },
  { path: "/dong", label: "Nguyễn Đông" },
];

const services: ServiceProps[] = [
  { id: 1, title: "UI/UX Design", icon: <BsVectorPen />, finished: 113 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: "Marketing", icon: <FiBarChart />, finished: 313 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 9,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 178,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 742,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.png",
    name: "Random Password Generator",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    id: 2,
    img: "/project2.jpg",
    name: "React E-commerce Website",
    tools: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    img: "/project3.jpg",
    name: "Shopping Cart",
    tools: ["React", "Redux-Toolkit", "Tailwind CSS"],
  },
  {
    id: 4,
    img: "/project4.jpg",
    name: "Autocomplete SearchBar",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "ReactJS", level: 75 },
  { name: "NextJS", level: 65 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "AungThaPyay 2 Road, TharKayTa,Yangon" },
  { id: 2, title: "Phone", text: "+959-883-271-929" },
  { id: 3, title: "Email", text: "yelinko.2002@gmail.com" },
];

const infor: PersonalInfor[] = [
  { id: 1, Url: "https://profile.baohiem.app/1", name: "Nguyễn Duy Đông", title: "Co-Founder", email: "doitac@baohiem.app", phoneNumber: "0981996868", des: "Be all You can be"},
  { id: 2, Url: "https://profile.baohiem.app/2", name: "Phạm Tuấn Phong", title: "Co-Founder", email: "doitac@baohiem.app", phoneNumber: "0915456885", des: "YOLO - Đơn giản là sự lựa chọn tốt nhất"},
  { id: 3, Url: "https://profile.baohiem.app/3", name: "Hoàng Quốc Bảo", title: "Co-Founder", email: "baohq@baohiem.app", phoneNumber: "0387641248", des: "Be all You can be"}

]
export {navLinks, projects, countUpItems, services, skills, contacts, infor };
