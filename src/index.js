import { Bison } from "./components/Bison"
import { createRoot } from "react-dom/client"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Bison/>
    </BrowserRouter>
)
