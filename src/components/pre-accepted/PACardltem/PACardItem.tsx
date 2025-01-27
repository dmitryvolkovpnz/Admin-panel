import {Card, ListGroup} from "react-bootstrap";

interface PreCardItemProps {
    items?: {
        statementStatus: string;
        statementId: number;
        firstName: string;
        lastName: string;
        city: string;
        phoneNumber: string;
        email: string;
        course: string
    }
}


function PaCardItem({items}: PreCardItemProps) {
    return (
        <Card className="p-2 mb-4">
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <span>Имя</span>
                        <span>{items?.firstName}</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <span>Фамилия</span>
                        <span>{items?.lastName}</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <span>Город</span>
                        <span>{items?.city}</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <span>Почта</span>
                        <span>{items?.email}</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <span>Телефон</span>
                        <span>{items?.phone}</span>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                        <span>Направление</span>
                        <span>{items?.nap}</span>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default PaCardItem;