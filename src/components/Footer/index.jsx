import { Container } from "./styles";

import logoFooter from "../../assets/logo-footer.svg";

export function Footer() {
    return(
        <Container>

            <img src={logoFooter} alt="Polígono Azul" />

            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    );
}