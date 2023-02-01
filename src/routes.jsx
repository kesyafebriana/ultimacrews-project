import { useState } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  BanknotesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, Bendahara } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile Ultimacrews",
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Data Ultimacrews",
        path: "/data-ultimacrews",
        element: <Tables />,
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "Uang Kas",
        path: "/uang-kas",
        element: <Notifications />,
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "Data Uang Kas",
        path: "/data-uang-kas",
        element: <Bendahara />,
      },
    ],
  },
  {
    title: "log out",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "log out",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
