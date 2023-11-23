import styled from "styled-components";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  min-width: 100px;
  max-width: 150px;
  margin: auto;
  font-size: var(--font-s);
  background-color: white;
`;
const DropdownBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 12px;
  font-size: var(--font-xs);
  letter-spacing: var(--ls);
  text-transform: uppercase;
  cursor: pointer;
  color: var(--font-color);
`;

const DropdownContainer = styled(motion.div)`
  max-height: 120px;
  overflow-y: scroll;
  position: absolute;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f4f6f7;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: #f4f6f7;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #d6eaf8;
  }
`;

const DropdownOption = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 145px;
  max-width: 150px;
  background-color: #ddfdfe;
  border-bottom: 1px solid #edede9;
  padding: 12px;
  font-size: var(--font-xs);
  letter-spacing: var(--ls);
  text-transform: uppercase;
  cursor: pointer;
  color: var(--font-color);
`;

const Dropdown = ({ ph, options, fn, index }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(ph);

  const toggleOpen = () => {
    setShow(!show);
  };

  const handleClick = (value) => {
    setSelected(value);
    setShow(false);
    fn(value);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 * index }}
    >
      <DropdownBtn onClick={() => toggleOpen()}>
        {selected}
        {show ? (
          <RiArrowDropUpLine size={30} />
        ) : (
          <RiArrowDropDownLine size={30} />
        )}
      </DropdownBtn>
      {show && (
        <DropdownContainer>
          {options.map((value, index) => {
            return (
              <DropdownOption
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.05 * index,
                }}
                key={index}
                onClick={() => handleClick(value)}
              >
                {value}
              </DropdownOption>
            );
          })}
        </DropdownContainer>
      )}
    </Container>
  );
};

export default Dropdown;
