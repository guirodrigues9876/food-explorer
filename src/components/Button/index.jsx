import { Container } from './styles';

export function Button({ title, background, ...rest }) {
    return (
      <Container
        type='button'
        background={background}
        {...rest}
      >
        {title}
      </Container>
    );
  }