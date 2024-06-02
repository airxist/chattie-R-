import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Authentication from "./shared/Authentication"
import { CreateYourSpace, Login, Register, VerifyEmail } from './pages';
import Dashboard from "./shared/Dashboard";

const App = () => {
  return (
    <Wrapper className="App mx-auto">
      <Routes>
        {/* shared layout */}
        <Route path="/" element={<Authentication />}>
          <Route index element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/create-space" element={<CreateYourSpace />} />
        </Route>
        {/* shared layout */}
        <Route path="/dashboard" element={<Dashboard />}>

        </Route>
      </Routes>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
`

export default App
