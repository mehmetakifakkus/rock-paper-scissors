"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  useRouter().replace("/step1");
  return <></>;
}
