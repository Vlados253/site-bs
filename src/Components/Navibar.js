import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logotip from '../img/Logotip.png'

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: black;
        text-decoration: none;
        &:hover{
            color: gray;
        }
    }
    .logo{
        transition: 0.3s;
    }
    .logo:hover{
        opacity: 70%;
        cursor: pointer;
    }
    @media(max-width: 992px){
        .media{
            margin-top: 15px; 
        }
    }
    
`

function NaviBar() {
    return (
    <>
    <Styles>
        <Navbar collapseOnSelect expand="lg" bg="white" className="d-flex align-items-center py-3">
            <Container>
                <Navbar.Brand className="logo" style={{"margin-right":"15px"}}>
                    <Link to="/">
                        <img 
                            src={Logotip}
                            alt="Vipo"
                            style={{"height":"66px", "width":"auto"}}
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-3">
                        <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/about">О компании</Link></Nav.Link>
                        <Nav.Link><Link to="/products">Продукция</Link></Nav.Link>
                        <Nav.Link><Link to="/service">Услуги</Link></Nav.Link>
                        <Nav.Link><Link to="/contacts">Контакты</Link></Nav.Link>
                    </Nav>
                    {/* <Nav style={{"margin-left":"15px"}}>
                        <div class="input-group media">
                            <input type="search" class="form-control rounded" placeholder="Поиск" aria-label="Search" aria-describedby="search-addon" />
                            <Button class="variant-primary" style={{"border-radius":"8px", "margin-left":"8px"}}>Найти</Button>
                        </div>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
    </>
    )
}

export default NaviBar;