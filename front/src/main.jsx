import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import Home from "./pages/public/Home.jsx";
import CreateRequest from "./pages/public/CreateRequest.jsx";
import BecomeTechnician from "./pages/public/BecomeTechnician.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import TechnicianDashboard from "./pages/technician/Dashboard.jsx";
import Requests from "./pages/technician/Requests.jsx";
import Interventions from "./pages/technician/Interventions.jsx";
import CompletedInterventions from "./pages/technician/CompletedInterventions.jsx";
import Subscription from "./pages/technician/Subscription.jsx";
import Profile from "./pages/technician/Profile.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";
import TechnicianLayout from "./layouts/TechnicianLayout.jsx";
import { Login } from "./pages/auth/Login.jsx";
import { Register } from "./pages/auth/Register.jsx";
import { RoleGuard } from "./middlewares/RoleGuard.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/become-technician" element={<BecomeTechnician />} />
            <Route path="/request" element={<CreateRequest />} />
          </Route>

          {/* Routes privées */}
          <Route
            path="admin"
            element={
              <RoleGuard allowedRoles={["ADMIN"]}>
                <AdminLayout />
              </RoleGuard>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>

          {/* Routes privées */}
          <Route
            path="technician"
            element={
              <RoleGuard allowedRoles={["TECHNICIAN"]}>
                <TechnicianLayout />
              </RoleGuard>
            }
          >
            <Route index element={<TechnicianDashboard />} />
            <Route path="requests" element={<Requests />} />
            <Route path="interventions" element={<Interventions />} />
            <Route
              path="completed-interventions"
              element={<CompletedInterventions />}
            />
            <Route path="subscription" element={<Subscription />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
