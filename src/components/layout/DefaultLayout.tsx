import React, { PropsWithChildren } from "react";
import Header from "../header";
import SidebarNav from "../sidenav";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <SidebarNav />
      <main className="mb-14 ml-[330px] pt-[calc(33px+60px)]">{children}</main>
    </div>
  );
};

export default DefaultLayout;
