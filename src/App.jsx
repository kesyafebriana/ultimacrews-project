import { useState } from "react";
import { Routes, Route, Navigate, Switch } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  const [login, setLogin] = useState("auth/sign-in");

  return (
    <Switch>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to={login} replace />} />
      </Routes>
    </Switch>
  );
}

export default App;
