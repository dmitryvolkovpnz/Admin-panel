import {Stack, Container} from "react-bootstrap";
import './header.scss'
import {Link} from "react-router-dom";


function Header() {
    return (
        <Container>
            <Stack direction="horizontal" gap={5} className="pt-4 pb-4">
                <div className="header__logo">
                    <img src="/logo.svg" alt=""/>
                </div>

                <div className="ms-auto"><Link to="/pre-accepted">ПРЕДЗАЯВКИ</Link></div>
                <div className="vr"/>
                <div className="p-2"><Link to="/">ЗАЯВКИ</Link></div>
                <div className="vr"/>
                <div className="p-2"><Link to="/analitics">АНАЛИТИКА</Link></div>
            </Stack>
        </Container>

    );
}

export default Header;