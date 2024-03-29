import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import NotificationIcon from "../Icons/notification_icon";

type HeaderProps = {
  showDrawer: () => void;
};

const Header: React.FC<HeaderProps> = ({ showDrawer }) => {
  return (
    <header className="header">
      <a href="#" className="nav-brand">
        TransMonitor
      </a>

      <div className="flex items-center gap-x-6 sm:gap-x-14">
        <nav className="hidden gap-x-9 lg:flex">
          <a href="#" className="font-SegoeUI text-sm text-[#647787]">
            Support
          </a>
          <a href="#" className="font-SegoeUI text-sm text-[#647787]">
            FAQ
          </a>
        </nav>

        <span className="relative">
          <NotificationIcon />

          <span className="absolute -right-1 -top-2 flex h-[15px] w-[15px] items-center justify-center rounded-[50%] bg-[#1860EC] text-[10px] text-white">
            8
          </span>
        </span>

        <span className="flex items-center gap-x-3">
          <span className="hidden font-SegoeUI text-sm text-[#647787] sm:block">Oluwaleke Ojo</span>
          <img src="/assets/images/avatar.jpeg" alt="Profile image" className="h-9 w-9 rounded-[50%] object-cover" />
        </span>

        <button
          className="xl:hidden"
          onClick={() => {
            showDrawer();
          }}
        >
          <MenuOutlined />
        </button>
      </div>
    </header>
  );
};

export default Header;
