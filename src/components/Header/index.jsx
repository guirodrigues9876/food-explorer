import { useAuth } from '../../hooks/auth';

import { Container, Menu, Desktop, Logout, Search } from "./styles";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { BsReceiptCutoff } from "react-icons/bs";

import { Logo } from "../Logo";

export function Header({filterDishes}){
    const { user, signOut } = useAuth();
    // const isAdmin = user && user.isAdmin ? true : false;


    return (
        <Container>
            <Menu>
                <button type="button">
                    <AiOutlineMenu size={24} />
                </button>

                <Logo width={"278px"} height={"26px"}  display={"none"} />

                <button type="button" className="mobile">
                    <PiReceipt size={24} />
                </button>

                <Search>
                    <AiOutlineSearch size={24} />
                    <input
                        type="search"
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={filterDishes}
                    />
                </Search>

                <Desktop>

                    {/* <>
                        <button type="button">
                        <BsReceiptCutoff size={24} />
                        <p>Pedidos <span>(9)</span></p>
                        </button>
                    </> */}

                    <>
                        <a href="/add">
                        Novo Prato
                        </a>
                    </>

                    <Logout onClick={signOut}>
                        <RxExit size={24}/>
                    </Logout>
                </Desktop>
            </Menu>
        </Container>
    );
}