import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/films/seach-by-keyword/:keyword" element={<Catalog />} />
            <Route path="/films/:id" element={<Detail />} />
            {/* <Route path="/" element={<Home />}/> */}
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
export default AppRouter;