import { Container } from "./styles"

export function ButtonTints_400({ text, ...props }) {
    return (
        <Container {...props}>
            {text}
        </Container>
    )
}