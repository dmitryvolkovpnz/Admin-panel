import {Container} from "react-bootstrap";
import MainBoard from "../components/main/mainBoard/mainBoard.tsx";
import TimeButton from "../components/main/timeButton/timeButton.tsx";

function Main() {
    return (
        <Container>
            <div className="d-flex justify-content-end">
                <TimeButton />
            </div>

            <MainBoard />
        </Container>
    );
}

export default Main;