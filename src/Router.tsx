import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Publication } from "./pages/Publication";
import { DefaultLayout } from "./layouts/DefaultLayout";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Profile />} />
                <Route path="/publicacao" element={<Publication />} />
            </Route>
        </Routes>
    )
}