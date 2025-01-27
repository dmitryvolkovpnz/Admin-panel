import {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
import axios from "axios";


function TimeButton() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [startDate, setStartDate] = useState(""); // Состояние для даты начала
    const [endDate, setEndDate] = useState(""); // Состояние для даты окончания

    const handleSubmit = () => {
        axios.post("http://localhost:9093/admin/set/period", {
            startDate: startDate,
            endDate: endDate,
        })
            .then(response => {
                console.log("Даты успешно отправлены:", response.data);
                handleClose();
            })
            .catch(error => {
                console.error("Ошибка при отправке данных:", error);
            });
    };

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
            >
                Установить даты заявок
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Период открытия заявок</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>
                        Выберите дату начала приема заявок
                    </Form.Label>
                    <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <Form.Label>
                        Выберите дату окончания приема заявок
                    </Form.Label>
                    <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Отмена
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                    >
                        Принять
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TimeButton;