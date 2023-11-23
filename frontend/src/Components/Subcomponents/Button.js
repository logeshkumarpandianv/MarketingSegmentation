import styled from "styled-components"
import { motion } from "framer-motion"


const Container = styled(motion.div)`
    text-transform: uppercase;
    background-color: ${props => props.bgcolor};
    color: ${props => props.color};
    padding: 6px 20px;
    border-radius: 3px;
    cursor: pointer;
    font-size: var(--font-s);
    box-shadow: var(--box-shadow);
    letter-spacing: var(--ls);
`


const Button = ({ name, onClick, bgcolor, color, index }) => {
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 * index }}

            onClick={onClick} bgcolor={bgcolor} color={color}>
            {name}
        </Container>
    )
}

export default Button