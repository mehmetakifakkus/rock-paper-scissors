"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  useRouter().push("/step1");
  return <></>;
}
