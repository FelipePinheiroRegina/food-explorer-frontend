import { useEffect } from "react"
import { FiX } from "react-icons/fi"
import { Container } from "./styles"

export function Success({visible, message, closeSuccess}) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                closeSuccess();
            }, 3000);

            // Clear timer if component is unmounted or `visible` changes
            return () => clearTimeout(timer)
        }
    }, [visible, closeSuccess])

    return (
        <Container data-success-is-open={visible}>
            <FiX onClick={closeSuccess}/>
            <strong>{message}</strong>
        </Container>
    )
}