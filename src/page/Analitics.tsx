import {Container, Row, Col} from "react-bootstrap";

function Analitics() {
    return (
        <Container>
            <Row xs={1} md={2} xl={3} className="mt-4">
                    <Col>
                        <div className="w-26 p-4 m-4" style={{ background: "#EDEDED", borderRadius: "10px" }}>
                            <h5>Всего заявок</h5>
                            <div className="d-flex justify-content-center align-items-center">
                                <h2>15</h2>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="w-26 p-4 m-4" style={{ background: "#EDEDED", borderRadius: "10px" }}>
                            <h5>Принято</h5>
                            <div className="d-flex justify-content-center align-items-center">
                                <h2>0</h2>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="w-26 p-4 m-4" style={{ background: "#EDEDED", borderRadius: "10px" }}>
                            <h5>Отказано</h5>
                            <div className="d-flex justify-content-center align-items-center">
                                <h2>0</h2>
                            </div>
                        </div>
                    </Col>
            </Row>
        </Container>
    );
}

export default Analitics;