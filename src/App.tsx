import { Route, Routes } from "react-router"
import { Container } from "./Components/Container/Container"
import { CubeWrapper } from "./Components/CubeWrapper/CubeWrapper"
import { SidePage } from "./Components/SidePage/SidePage"
import "./App.css"


export const App = () => {


  return (
    <>
      <h1 className="title">Dynamic cube</h1>
      <Container>
        <Routes>
          <Route path='/dynamic-cube'>
            <Route path='' element={<CubeWrapper />} />
            <Route path='side/id/*' element={<SidePage />} />
          </Route>
        </Routes>
      </Container>
    </>
  )
}
