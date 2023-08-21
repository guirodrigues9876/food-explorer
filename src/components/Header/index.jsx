import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Menu, Desktop, Logout, Search, NewDish } from "./styles";
import { MenuMobile } from "../MenuMobile";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { BsReceiptCutoff } from "react-icons/bs";
import { Logo } from "../../components/Logo";

import logo from "../../assets/logo.svg";

export function Header({ filterDishes }){
    const { user, signOut } = useAuth();
    const isAdmin = user && user.isAdmin ? true : false;


    const [ showMenu, setShowMenu ] = useState(false);

    return (
        <Container>

            <MenuMobile
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                    isAdmin={isAdmin}
                    filterDishes={filterDishes}
            />


            <Menu>
                <button type="button" onClick={() => setShowMenu(true)}>
                    <AiOutlineMenu size={24} />
                </button>

                <Logo isAdmin={isAdmin} />
                    {/* <img src={ logo} alt= "Logo food explorer" />
                    { isAdmin &&<p>admin</p>} */}
                

                {   !isAdmin &&
                    <button type="button" className="mobile">
                        <PiReceipt size={24} />
                    </button>
                }

                <Search>
                    <AiOutlineSearch size={24} />
                    <input
                        type="search"
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={filterDishes}
                    />
                </Search>

                <Desktop>
                    {!isAdmin &&

                        <>
                            <button type="button">
                            <BsReceiptCutoff size={24} />
                            <p>Pedidos <span>(0)</span></p>
                            </button>
                        </>

                    }

                    { isAdmin &&

                        <>
                            <NewDish to="/new">
                                Novo Prato
                            </NewDish>
                        </>
                    }
                
                    <Logout onClick={signOut}>
                        <RxExit size={24}/>
                    </Logout>
                </Desktop>
            </Menu>
        </Container>
    );
}