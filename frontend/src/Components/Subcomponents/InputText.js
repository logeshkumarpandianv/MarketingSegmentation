import styled from "styled-components";
import { motion } from "framer-motion";

const InputBox = styled(motion.div)`
  position: relative;
  width: 100%;
  margin: auto;
  font-size: var(--font-s);
`;

const InputContainer = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 100%;
  padding: 8px;
  max-width: 40%;
  border: 1px solid var(--bg-color);
  border-radius: 5px;
  outline: none;
  transition: 0.25s;

  &:valid ~ span,
  &:focus ~ span {
    background-color: #d6eaf8;
    transform: translateX(10px) translateY(-7px);
    font-size: var(--font-xs);
    padding: 0 12px;
    color: var(--font-color);
    letter-spacing: 1px;
    border-radius: 2px;
    font-weight: 500;
    text-transform: uppercase;
  }

  &:valid,
  &:focus {
    border: 1px solid #2b2b2b;
  }
`;

const Span = styled.span`
  position: absolute;
  left: 0;
  text-transform: uppercase;
  padding: 12px;
  font-size: var(--font-xs);
  pointer-events: none;
  transition: 0.25s;
  color: #2b2b2b;
  letter-spacing: var(--ls);
`;

const InputText = ({ type, onChange, onClick, name, label, index, value }) => {
  return (
    <InputBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 * index }}
    >
      <InputContainer
        defaultValue={value}
        type={type}
        label={label}
        name={name}
        required="required"
        onChange={onChange}
        onClick={onClick}
      />
      <Span>{label}</Span>
    </InputBox>
  );
};

export default InputText;
