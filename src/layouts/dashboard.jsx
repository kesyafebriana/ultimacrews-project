import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import routesuser from "@/routesuser";
import routesadmin from "@/routesadmin";
import routesbendahara from "@/routesbendahara";
import routeshrd from "@/routeshrd";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "@/features/authSlice.js";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const userBendahara = false;
  const userHrd = false;
  const userAdmin = false;
  const user = true;

  const dispatch2 = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch2(getMe());
  }, [dispatch2]);

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/auth/sign-in");
  //   }
  // }, [isError, navigate]);
  
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      {userBendahara ?
        <Sidenav
          routes={routesbendahara}
          brandImg={
            sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
          }
        /> : null
      }
      {userHrd ?
        <Sidenav
          routes={routeshrd}
          brandImg={
            sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
          }
        /> : null
      }
      {userAdmin ?
        <Sidenav
          routes={routesadmin}
          brandImg={
            sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
          }
        /> : null
      }
      {user ?
        <Sidenav
          routes={routesuser}
          brandImg={
            sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
          }
        /> : null
      }
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
