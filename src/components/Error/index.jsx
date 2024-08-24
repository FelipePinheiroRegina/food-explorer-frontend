import { useEffect } from 'react'
import { FiX } from "react-icons/fi"
import { Container } from "./styles"

export function Error({ visible, message, closeError }) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                closeError();
            }, 3000);

            // Clear timer if component is unmounted or `visible` changes
            return () => clearTimeout(timer)
        }
    }, [visible, closeError])

    return (
        <Container data-error-is-open={visible}>
            <FiX onClick={closeError}/>
            <strong>{message}</strong>
        </Container>
    );
}
