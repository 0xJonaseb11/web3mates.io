"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

export default function NProgressProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    NProgress.start();
    timeout = setTimeout(() => {
      NProgress.done();
    }, 600);
    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname]);

  return <>{children}</>;
} 