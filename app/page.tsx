import Image from "next/image";
import {Section1} from "@/components/Section1";
import {Section2} from "@/components/Section2";
import {Section3} from "@/components/Section3";
import {Section4} from "@/components/Section4";
import "./globals.css";

export default function Home() {
  return (
      <>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
      </>
  );
}
