import { Container } from "./styles"

export function TextArea({ id, value, ...props}) {
    return (
        <Container id={id}  {...props} value={value}>
            
        </Container>
    )
}