import React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Expoxy",
    path: "/expoxy",
  },
  {
    name: "Pool Deck",
    path: "/pool-deck",
  },
  {
    name: "Stains",
    path: "/stains",
  },
  {
    name: "Sealer's",
    path: "/sealers",
  },
  {
    name: "Overlays/Repair",
    path: "/overlays",
  },
  {
    name: "Deck Drains/Forms",
    path: "/deckDrains-forms",
  },
  {
    name: "Water Proofing Systems",
    path: "/waterProofing-systems",
  },
  {
    name: "Rentals",
    path: "/",
  },
  {
    name: "Stamps",
    path: "/",
  },
  {
    name: "Color Hardener/Release",
    path: "/",
  },
  {
    name: "Concrete Surface",
    path: "/concreteSurfaces",
  },
  {
    name: "Concrete",
    path: "/concrete",
  },
  {
    name: "Rebar/Expansion",
    path: "/rebar-expansion",
  },
  {
    name: "Tools",
    path: "/tools",
  },
  {
    name: "Sprayer",
    path: "/sprayers",
  },
];

const Nav = () => {
  let phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  return (
    <div className="bg-white fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4 text-black">
        <Link href="/">
          <Image src="/dcslv-logo.png" alt="logo" width={130} height={18} />
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex ">
          <div className="">
            <Link className="p-4 hover:text-red-700 duration-300" href="/">
              Home
            </Link>
            <Link className="p-4 hover:text-red-700 duration-300" href="/epoxy">
              Epoxy
            </Link>
            <Link
              className="p-4 hover:text-red-700 duration-300"
              href="/pool-deck"
            >
              Pool Decks
            </Link>
            <Link className="p-4 hover:text-red-700 duration-300" href="/stain">
              Stain
            </Link>
            <Link
              className="p-4 hover:text-red-700 duration-300"
              href="/sealer"
            >
              Sealer
            </Link>
            <Link
              className="p-4 hover:text-red-700 duration-300"
              href="/overlay-Repair"
            >
              Overlay/Repairs
            </Link>
            <Link
              className="p-4 hover:text-red-700 duration-300"
              href="/deckDrains-forms"
            >
              Deck Drains & Forms
            </Link>
            <Link
              className="p-4 hover:text-red-700 duration-300"
              href="/waterProofing"
            >
              Water Proofing
            </Link>
            <Link
              className="p-4 hover:text-red-700 duration-300"
              href="/colorHardener-release"
            >
              Color Hardener/Release
            </Link>
          </div>
          {/* <div className="">
            <Link className="p-4" href="/colorHardener-release">
              Color Hardener/Release
            </Link>
            <Link className="p-4" href="/rentals">
              Rentals
            </Link>
            <Link className="p-4" href="/concrete-stamps">
              Concrete Stamps
            </Link>
            <Link className="p-4" href="/concreteSurfaces">
              Concrete Surfaces & Retarder
            </Link>
            <Link className="p-4" href="/concrete">
              Concrete
            </Link>
            <Link className="p-4" href="/rebar-expansion">
              Rebar & Expansion
            </Link>
            <Link className="p-4" href="/tools">
              Tools
            </Link>
            <Link className="p-4" href="/sprayers">
              Sprayers
            </Link>
          </div> */}
          {/* {links.map((link, index) => {
            return (
              // <Link
              //   href={link.path}
              //   key={index}
              //   className="hover:text-accent p-4 duration-300"
              // >
              //   {link.name}
              // </Link>
            );
          })} */}
        </div>
        <div className="hidden xl:flex">
          <Link
            href="/contact-us"
            className="p-2 text-center rounded-md bg-black hover:bg-gray-600 text-white min-w-[130px] duration-300"
          >
            CONTACT US
          </Link>
        </div>
        {/* mobile Nav */}
        {/* <div onClick={toggleNav} className="block xl:hidden z-10">
          {mobileNavVisible ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>

        <div
          className={
            mobileNavVisible
              ? "xl:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-black ease-in duration-300"
              : "xl:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-white ease-in duration-300"
          }
        >
          {links.map((link, index) => {
            return (
              <Link
                onClick={toggleNav}
                href={link.path}
                key={index}
                className="p-4 text-4xl hover:text-accent duration-300"
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            onClick={toggleNav}
            href="/contact-us"
            className="p-4 text-4xl hover:text-accent duration-300"
          >
            CONTACT US
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
