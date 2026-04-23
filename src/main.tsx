import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./routes/app-router.tsx";
import "./index.css";
import PageLayout from "./components/ui/layout/page-layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <PageLayout>
      <AppRouter />
    </PageLayout>
    </BrowserRouter>
  </StrictMode>,
);
