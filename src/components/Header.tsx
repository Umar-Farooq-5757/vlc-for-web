import type React from "react";
import Logo from "/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-1 px-3">
      <div className="flex items-center gap-2">
        <img className="size-8" src={Logo} />
        <h1 className="font-semibold">VLC for Web</h1>
      </div>
      <button
        onClick={() =>
          window.open("https://github.com/umar-farooq-5757/vlc-for-web")
        }
        className="bg-[#ededed] text-sm font-semibold text-[#444] border border-[#bbb] px-3 py-0.5 hover:border-blue-600 hover:bg-blue-100">
        GitHub
      </button>
    </header>
  );
};

export default Header;
