import { Url } from "next/dist/shared/lib/router/router";

type WrapperProps = {
  pageIndex: number
  children: React.ReactNode
  className? : string
}
type NavLink = {
  path: string;
  label: string;
};
type Skills = {
  name: string;
  level: number;
};
type SkillBarProps = {
  skills: Skills[];
};
type ProjectProps = {
  id: number;
  img: string;
  name: string;
  tools: string[];
};
type PersonalInfor = {
  id: number;
  Url: Url;
  name: string;
  title: string;
  email: string;
  phoneNumber: string;
  des: string;
};
type CountUpProps = {
  start: number
  end: number
  duration: number
}
type countUpItemsProps = {
  id: number;
  number: number;
  text: string;
};

type ServiceProps = {
  id: number;
  title: string;
  icon: React.ReactNode;
  finished: number;
};

type ContactsProps = {
  id: number;
  title: string;
  text: string;
};

export {
  WrapperProps,
  CountUpProps,
  NavLink,
  SkillBarProps,
  countUpItemsProps,
  ProjectProps,
  ServiceProps,
  PersonalInfor,
  ContactsProps,
};
