
import { Container, Content, Banner, Main } from "./styles";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";

import banner from "../../assets/flavors.png"

export function Home(){
    return(
        <Container>
            <Header />


            <Main>
                <Content>


                    <Banner>
                        <img 
                            src={banner} 
                            alt="Macarons coloridos despencando com folhas verdes e frutas vermelhas." 
                        />
                    
                        <div>
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </Banner>



                    <Section title="Refeições">

                        <Card />

                    </Section>
                </Content>
            </Main>

            <Footer />
        </Container>
    )
}