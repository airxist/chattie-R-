import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Authentication from "./shared/Authentication"
import { About, Anonymous, Chats, CreateYourSpace, DMs, Login, Register, Reply, VerifyEmail } from './pages';
import Dashboard from "./shared/Dashboard";
import Profile from "./pages/profile/Profile";

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
        {/* shared layout Dashboard */}
        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Chats 
            description="At My team, All communication is strictly business based. Nothing outside business"
          />} />
          <Route path="reply" element={<Reply />}/>
          <Route path="DMs" element={<DMs />} />
          <Route path="anonymous" element={<Anonymous />} />
          <Route path="about" element={<About />} />
        </Route> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background: lightgreen;
`

export default App
