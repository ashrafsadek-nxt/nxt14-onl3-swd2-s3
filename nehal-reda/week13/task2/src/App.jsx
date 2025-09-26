import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./pages/login"
import Profile from "./pages/profile"


function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route>
         <Route index element={<Login/>}/>
         <Route path="/profile" element={<Profile/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
