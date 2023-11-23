// import { useContext, useState } from "react"
// import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { motion } from "framer-motion";
import Input from "../Components/Subcomponents/Input";
import Button from "../Components/Subcomponents/Button";

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

const Login = () => {
  // const navigate = useNavigate()

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
          <Input label={"Username"} />
          <Input label={"Password"} />
          <ButtonContainer>
            <Button bgcolor={"black"} color={"white"} name={"submit"} />
          </ButtonContainer>
        </RightInner>
      </Right>
    </Container>
  );
};

export default Login;
