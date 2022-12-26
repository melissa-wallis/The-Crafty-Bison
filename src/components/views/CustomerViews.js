//STRETCH GOAL - CUSTOMER VIEW OF STORE

//employee (currently only) view of the store. Renders all the components on the homepage

import { Routes, Route, Outlet } from "react-router-dom"
import { AllItems } from "../items/AllItems"
import { CrossStitchItems } from "../items/CrossStitchItems"
import { EmbroideryItems } from "../items/EmbroideryItems"
import { MiniatureItems } from "../items/MiniatureItems"
import { WallHangingItems } from "../items/WallHangingItems"
import { ItemDetails } from "../items/ItemDetails"

export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Outlet/>
                </>
            }>
                <Route path="/" element={ <AllItems /> } />
                <Route path="crossStitch" element={<CrossStitchItems/>} />
                <Route path="embroidery" element={<EmbroideryItems/>} />
                <Route path="miniatures" element={<MiniatureItems/>} />
                <Route path="wallHangings" element={<WallHangingItems/>} />
                <Route path=":itemId" element={<ItemDetails />} />
            </Route>
        </Routes>
    )
}