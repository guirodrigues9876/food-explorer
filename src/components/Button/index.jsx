import { Container } from './styles';

export function Button({ title, loading = false, background, ...rest }) {
    return (
      <Container
        type='button'
        background={background}
        disabled={loading}
        {...rest}
      >
        {!loading ? title : "Carregando..."}
      </Container>
    );
  }