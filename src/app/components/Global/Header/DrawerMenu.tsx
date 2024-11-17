import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const DrawerMenu = () => {
  return (
    <div className="h-screen content-between">
      <div>
        <ul className="space-y-3.5 mt-8 mb-8">
          <li className="max-w-auto text-gray-900 uppercase text-xl font-bold">
            <Link href="/" className="animated-underline">
              Home
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/chicken-recipes" className="animated-underline">
              Chicken Recipes
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/bread-recipes" className="animated-underline">
              Bread Recipes
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/cookies-recipes" className="animated-underline">
              Cookies Recipes
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/shrimp-recipes" className="animated-underline">
            Shrimp Recipes
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/about" className="animated-underline">
              About me
            </Link>
          </li>
          <li className="text-gray-900 uppercase text-xl font-bold">
            <Link href="/contact" className="animated-underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="transition-all w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 text-lg rounded">
          Newsletter
        </button>
        <div className="flex items-center gap-1.5 mt-5">
          <span className="font-semibold text-sm uppercase">
            Let&#39;s be friends:
          </span>
          <ul className="flex items-center gap-1">
            {[
              {
                href: "https://www.facebook.com/foudrecipes/",
                icon: <FaFacebookSquare />,
                label: "Facebook",
              },
              {
                href: "https://x.com/foudrecipes",
                icon: <FaSquareXTwitter />,
                label: "Twitter",
              },
              {
                href: "https://www.youtube.com/channel/UCQSftRMqU55nnhYfw0Ty9Cg",
                icon: <FaYoutubeSquare />,
                label: "YouTube",
              },
              {
                href: "https://www.instagram.com/foudrecipes/",
                icon: <FaInstagramSquare />,
                label: "Instagram",
              },
              {
                href: "https://www.pinterest.com/foudrecipes/",
                icon: <FaPinterest />,
                label: "Instagram",
              },
            ].map(({ href, icon, label }, index) => (
              <li key={index}>
                <Link href={href} aria-label={label}>
                  {React.cloneElement(icon, {
                    className:
                      "size-7 text-gray-650 transition-all duration-300 hover:text-gray-900",
                  })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
