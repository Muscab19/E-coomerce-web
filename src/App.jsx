import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"

function App() {
    return <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/cart" element={ <Cart /> }/>
        </Routes>
}

export default App

// 