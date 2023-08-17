import { Container } from './styles';

export function IngredientTag({ title, ...rest}){
    return(
        <Container {...rest}>
            { title }
        </Container>
    )
}