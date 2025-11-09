import type { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// This is the root layout - just a minimal HTML wrapper
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
