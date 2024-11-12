import React from "react";
import Logo from "@/app/components/Global/Header/Logo";
import Menu from "@/app/components/Global/Header/Menu";
import CallToAction from "@/app/components/Global/Header/CallToAction";

const Navbar = () => {
  return (
    <>
      <div className="bg-orange-500 text-white text-sm text-center py-2.5 italic">
      Discover the most delicious and trendy recipes of 2024
      </div>
      <nav
        className="py-2.5 sticky top-0 z-50 bg-white shadow"
        role="navigation"
      >
        <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-16">
              <Logo />
              <Menu />
            </div>
            <div>
              <CallToAction />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
