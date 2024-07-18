import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Utility/Routes/Routes.jsx";
import ProviderContext from "./Utility/Provider/ProviderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-5xl mx-auto font-poppins">
      <ProviderContext>
        <RouterProvider router={router} />
      </ProviderContext>
    </div>
  </React.StrictMode>
);
