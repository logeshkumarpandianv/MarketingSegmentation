import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import { useNavigate } from "react-router-dom";

const Nav = styled(motion.div)`
  height: 55px;
  min-width: 100%;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--nav-color);
  padding: 0px 15px;
`;
const Logo = styled.div`
  font-size: var(--font-l);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 600;
  background: linear-gradient(
    to right,
    #f72585 0%,
    #f72585 25%,
    #4361ee 25%,
    #4361ee 50%,
    #ffbe0b 50%,
    #ffbe0b 75%,
    #06d6a0 75%,
    #06d6a0 100%
  );
  padding: 5px 20px;
  border-radius: 3px;
  box-shadow: var(--box-shadow);
  color: black;
`;

const Login = styled.div`
  background-color: var(--nav-color);
  color: var(--main-color);
  width: max-content;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  letter-spacing: 1.2px;
`;

const Menu = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-s);
  gap: 5%;
  padding-right: 50px;
`;

const Navbar = () => {
  const { user } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  // useEffect(() => {
  //   const reloadCount = sessionStorage.getItem("reloadCount");
  //   if (reloadCount < 1) {
  //     sessionStorage.setItem("reloadCount", String(reloadCount + 1));
  //     localStorage.removeItem("user");
  //     window.location.reload();
  //   } else {
  //     sessionStorage.removeItem("reloadCount");
  //   }
  // }, []);

  return (
    <Nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0,
      }}
    >
      <Logo>GO COLORS!</Logo>

      <Menu
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.3,
        }}
      >
        {user.length > 0 && (
          <Login onClick={() => handleLogin()}>
            <>{user ? "LOGOUT" : "LOGIN"} </>
          </Login>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
