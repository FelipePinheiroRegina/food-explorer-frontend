import { Container } from "./styles"

export function ButtonText({ icon: Icon, text, auth, fav, ...props }) {
    
    return (
        <Container $auth={auth}>
            { Icon && <Icon {...props}/>}

            <button  {...props}>
                {text}
            </button>
        </Container>
    )
}