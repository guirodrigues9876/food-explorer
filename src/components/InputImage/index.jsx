import { Container, Field } from './styles';


export function InputImage({ icon: Icon, title, id, text, ...rest }){
    return(
        <Container>
            <label htmlFor={id}>
                {title}
                <Field>
                    {Icon && <Icon size={24} />}
                    <input id={id} {...rest} type="file" />
                    <p>{text}</p>
                </Field>
            </label>
        </Container>
    )
}