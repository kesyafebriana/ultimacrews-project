import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  // const [login, setLogin] = useState("auth/sign-in");

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
<<<<<<< Updated upstream
      <Route path="*" element={<Navigate to={login} replace />} />
=======
      {/* <Route path="*" element={<Navigate to={login} replace />} /> */}
      {/* <Route path="*" element={<Dashboard />} /> */}
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;
