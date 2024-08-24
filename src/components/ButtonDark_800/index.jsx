import { Container } from "./styles"

export function ButtonDark_800({ text, ...props }) {
    return (
        <Container {...props}>
            {text}
        </Container>
    )
}