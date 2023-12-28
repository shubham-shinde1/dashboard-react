import Image from "next/image";
import { Inter } from "next/font/google";
import Stats from "../components/stats/Stats";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Stats />;
}
