import { Route, Routes, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Authentication from "./shared/Authentication"
import { 
  About, 
  Anonymous, 
  Chats, 
  CreateForget, 
  DMs, 
  Login, 
  Register, 
  Reply, 
  Reset, 
  Verify 
} from './pages';
import Dashboard from "./shared/Dashboard";
import Profile from "./pages/profile/Profile";

const App = () => {
  const navigate = useNavigate();

  const navigateToVerify = (e) => {
    e.preventDefault();
    navigate('/verify');
  }

  const navigateToLogin = (e) => {
    e.preventDefault();
    console.log("navigate to loging");
  }
  return (
    <Wrapper className="App mx-auto">
      <Routes>
        {/* shared layout */}
        <Route path="/" element={<Authentication />}>
          <Route index element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/forgot-password" element={<CreateForget
            hero="Forgot Password"
            label="We will send confirmation code into your email"
            value="Forgot password"
            submitAction={navigateToVerify}
          />} />
          <Route path="/create-space" element={<CreateForget
            hero="Create Your Own Space"
            label="It's your private space, name it anything you want"
            value="My Dev Team"
            policy="By continuing, you are agreeing to our terms of service, user terms of service, privacy policy and cookie policy"
          />} />
        </Route>
        {/* shared layout Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Chats 
            description="At My team, All communication is strictly business based. Nothing outside business"
          />} />
          <Route path="reply" element={<Reply />}/>
          <Route path="DMs" element={<DMs />} />
          <Route path="anonymous" element={<Anonymous />} />
          <Route path="about" element={<About />} />
        </Route>
        
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background: lightgreen;
`

export default App
