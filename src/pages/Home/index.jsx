
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home(){
    return(
        <Container>
            <Header />

            <Content />

            <Footer />
        </Container>
    )
}