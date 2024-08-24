import { Container } from "./styles"

export function InputWithIcon({ icon: Icon, isBg800, value, ...props }) {
    return (
        <Container $isBg800={isBg800}>
            { Icon && <Icon/> }

            <input {...props} value={value}/>
        </Container>
    )
}