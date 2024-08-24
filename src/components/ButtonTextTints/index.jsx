import { Container } from "./styles"

export function ButtonTextTints({ icon: Icon, text, auth, ...props }) {
    return (
        <Container $auth={auth}>
            { Icon && <Icon {...props}/>}

            <button  {...props}>
                {text}
            </button>
        </Container>
    )
}