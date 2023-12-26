// import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../Components/Subcomponents/Button";
import { useEffect, useState } from "react";
import InputText from "../Components/Subcomponents/InputText";

const Container = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  display: flex;
`;
const Left = styled.div`
  width: 40%;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;
const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #ebf2fa;
  border-radius: 10px;
  padding: 20px 50px;
  box-shadow: var(--box-shadow);
`;

const RightInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 8px;
`;

const ButtonContainer = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BigText = styled(motion.div)`
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
`;
const SmallText = styled(motion.div)`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Message = styled(motion.div)`
  font-size: 12px;
  color: red;
`;

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    setLoading(true);
    if (userName === "gocolors" && password === "12345678") {
      localStorage.setItem("user", JSON.stringify("gocolors"));
      setMessage("");
      navigate("/home");
      setLoading(false);
    } else {
      setMessage("Username or password wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    const reloadCount = sessionStorage.getItem("reloadCount");
    if (reloadCount < 1) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      localStorage.removeItem("user");
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  // useEffect(() => {
  //   console.log(userName, password);
  // });

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <Left>
        <BigText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          Marketing
        </BigText>
        <SmallText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
        >
          Login
        </SmallText>
      </Left>
      <Right>
        <RightInner>
          <Message>{message}</Message>
          <InputText label={"Username"} onChange={handleUserName} />
          <InputText
            label={"Password"}
            onChange={handlePassword}
            type={"password"}
          />
          <ButtonContainer>
            <Button
              bgcolor={"black"}
              color={"white"}
              name={loading ? "loading..." : "submit"}
              onClick={handleLogin}
            />
          </ButtonContainer>
        </RightInner>
      </Right>
    </Container>
  );
};

export default Login;
