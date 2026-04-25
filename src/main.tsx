import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./routes/app-router.tsx";
import "./index.css";
import PageLayout from "./components/ui/layout/page-layout.tsx";
import { ConfigProvider, theme } from "antd";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <PageLayout>
          <AppRouter />
        </PageLayout>
      </ConfigProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
);
