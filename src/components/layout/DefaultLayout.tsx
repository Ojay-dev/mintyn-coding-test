import React, { PropsWithChildren, useState } from "react";
import Header from "../header";
import SidebarNav from "../sidenav";
import { Drawer } from "antd";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header showDrawer={showDrawer} />

      <nav className="fixed top-[60px] hidden h-screen w-[330px] overflow-y-scroll bg-white pb-28 pt-[33px] xl:block">
        <SidebarNav />
      </nav>

      <Drawer title="" placement="left" onClose={onClose} open={open} className="antd-drawer">
        <SidebarNav />
      </Drawer>
      <main className="pb-16 pt-[calc(33px+60px)] xl:ml-[330px]">{children}</main>
    </div>
  );
};

export default DefaultLayout;
