import { Container, Field } from './styles';
import { BsChevronDown } from "react-icons/bs";

export function Select({ title, ...rest }) {
  return (
    <Container>
        <label>{title}</label>
        <Field>
            <select name="category" required {...rest}>
                <option value="meals" >Refeições</option>
                <option value="dessert">Sobremesas</option>
                <option value="drinks">Bebidas</option>
            </select>
            <BsChevronDown size={24} />
        </Field>
    </Container>
  );
}