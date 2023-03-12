import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { ErrorView, HomeView, ShareView } from "../views";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/share/:shareId"} element={<ShareView />} />
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  );
};
