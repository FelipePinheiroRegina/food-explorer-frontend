import { Container } from "./styles"

export function Select({ id, value, onChange }) {
    return (
        <Container id={id} value={value} onChange={onChange}>
            <option value="meal">Meal</option>
            <option value="dessert">Dessert</option>
            <option value="juice">Juice</option>
        </Container>
    )
}