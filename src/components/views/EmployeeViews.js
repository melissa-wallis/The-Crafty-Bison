import { Routes, Route, Outlet } from "react-router-dom"
import { AddItemForm } from "../items/AddItemForm"
import { AllItems } from "../items/AllItems"
import { CrossStitchItems } from "../items/CrossStitchItems"
import { EditItemForm } from "../items/EditItemForm"
import { EmbroideryItems } from "../items/EmbroideryItems"
import { MiniatureItems } from "../items/MiniatureItems"
import { WallHangingItems } from "../items/WallHangingItems"



export const EmployeeViews = () => {
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
                <Route path="item/create" element={<AddItemForm/>} />
                <Route path="items/:itemId/edit" element={<EditItemForm/>} />
            </Route>
        </Routes>
    )
}