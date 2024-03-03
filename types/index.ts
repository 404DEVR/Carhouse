import { Carcard } from "@/components";
import { MouseEventHandler } from "react";

export interface CustombuttonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btntype?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
}

export interface CustomFilterProps {
  title: string;
  options: optionProps[];
}

export interface optionProps {
  title: string;
  value: string;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  model: string;
  limit: number;
  fuel: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}
