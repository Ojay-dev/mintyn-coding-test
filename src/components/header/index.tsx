import React from "react";
import NotificationIcon from "../icons/notification_icon";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#" className="nav-brand">
        TransMonitor
      </a>

      <div className="flex items-center gap-x-14">
        <nav className="flex gap-x-9">
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
          <span className="font-SegoeUI text-sm text-[#647787]">Oluwaleke Ojo</span>
          <img src="/assets/images/avatar.jpeg" alt="Profile image" className="h-9 w-9 rounded-[50%] object-cover" />
        </span>
      </div>
    </header>
  );
};

export default Header;
