import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import DashboardPage from "../modules/frontApp/pages/DashboardPage"

export const FrontRoutes = () => {
  return (
    <div className="container">
        <div className="containerRouter">
            <Navbar />
            <DashboardPage/>
            <div className="main">
                <Routes>
                    <Route path='dashboard' element={<DashboardPage />}/>
                </Routes>

            </div>
        </div>
    </div>
  )
}
