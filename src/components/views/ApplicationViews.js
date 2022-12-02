import { Outlet, Route, Routes } from "react-router-dom"
import { AllItems } from "../items/AllItems"


export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>The Crafty Bison</h1>

                    <Outlet />
                </>
            }>

                <Route path="items" element={ <AllItems /> } />
            </Route>
        </Routes>
    )
}