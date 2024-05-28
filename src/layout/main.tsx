import Navbar from "@/components/common/navbar";
import React from "react";

export default function MainLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
