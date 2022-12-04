import { Routes, Route, Outlet } from "react-router-dom"
import { AllItems } from "../items/AllItems"

export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>The Crafty Bison</h1>
                    <Outlet/>
                </>
            }>
                    
            </Route>
        </Routes>
    )
}