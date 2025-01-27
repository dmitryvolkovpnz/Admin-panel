import {Card} from "react-bootstrap";

interface CardItemProps {
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

function CardItem({items}: CardItemProps) {
    return (
        <Card bg={'primary'} className="mt-2 mb-2">
            <Card.Header>
                <div className="d-flex justify-content-between">
                    <span>
                        Статус
                    </span>
                    <span>
                        {items?.statementStatus}
                    </span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <div className="d-flex justify-content-between">
                        <span>
                            Имя
                        </span>
                        <span>
                            {items?.firstName}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>
                            Фамилия
                        </span>
                        <span>
                            {items?.lastName}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>
                            Город проживания
                        </span>
                        <span>
                            {items?.city}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>
                            Номер телефона
                        </span>
                        <span>
                            {items?.phoneNumber}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>
                            Электронная почта
                        </span>
                        <span>
                            {items?.email}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>
                            Направление
                        </span>
                        <span>
                            {items?.course}
                        </span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardItem;