import { Routes, Route, Outlet } from "react-router-dom"
import { AllItems } from "../items/AllItems"
import { CrossStitchItems } from "../items/CrossStitchItems"



export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <h1>The Crafty Bison</h1>
                    <Outlet/>
                </>
            }>
                <Route index element={<AllItems />} />
                <Route path="crossStitch" element={<CrossStitchItems/>} />
            </Route>
        </Routes>
    )
}