import * as React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./components/App"
import LocationDetails from "./components/LocationDetails"
export default function Router() {
    return (
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/locationDetails/:term" element={<LocationDetails />} />
        </Routes>
    );
}