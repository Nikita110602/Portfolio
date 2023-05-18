import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
     <MainHeader>
        <NavLink to ="/">
            <img src="https://i.pinimg.com/564x/d7/fa/4c/d7fa4c45a154a9ff4e04e434bc35cbd4.jpg" alt="" className="logo" />
        </NavLink>
        <Navbar/>
        </MainHeader>

    </header>
  )
}
const MainHeader = styled.header`
  padding: 0 4.9rem;
  height: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 40%;
    pad
  }
`;

export default Header