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
  const [userBendahara, setUserBendahara] = useState(false);
  const [userAdmin, setUserAdmin] = useState(false);
  const [userHrd, setUserHrd] = useState(false);
  const [userNormal, setUserNormal] = useState(false);

  const dispatch2 = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch2(getMe());
  }, [dispatch2]);

  useEffect(() => {
    if(user.role==="user"){
      setUserNormal(true);
    } else if(user.role==="admin"){
      setUserAdmin(true);
    } else if(user.role==="bendahara"){
      setUserBendahara(true);
    } else if(user.role==="hrd"){
      setUserHrd(true);
    }
  });

  useEffect(() => {
    if (isError) {
      navigate("/auth/sign-in");
    }
  }, [isError, navigate]);
  
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
      {userNormal ?
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
