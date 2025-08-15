import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePageLoader } from "../hooks/usePageLoader";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  // Show global loader during route changes
  usePageLoader();

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
