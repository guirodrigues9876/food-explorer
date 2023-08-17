import { Container, Logo } from "./styles";

import logoFooter from "../../assets/logo-footer.svg";

export function Footer() {
    return(
        <Container>
            {/* <Logo> */}
                <img src={logoFooter} alt="Polígono Azul" />
            {/* </Logo> */}

            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    );
}