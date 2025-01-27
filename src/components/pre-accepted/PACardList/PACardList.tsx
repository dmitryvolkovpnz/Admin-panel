import {Col, Dropdown, DropdownButton, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import * as axios from "axios";
import PACardItem from "../PACardltem/PACardItem.tsx";


function PaCardList() {
    const [preAcceptedUser, setPreAcceptedUser] = useState([
        {
            statementStatus: 'предзаявка' ,
            id: 1,
            firstName: 'Иван',
            lastName: 'Иванов',
            city: 'Москва',
            phone: '89998752587',
            email: 'mail@mail.ru',
            nap: 'Java development'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 2,
            firstName: 'Тимофей',
            lastName: 'Рудаков',
            city: 'Воронеж',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Frontend'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 3,
            firstName: 'Тимур',
            lastName: 'Дементьев',
            city: 'Пенза',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Testing'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 4,
            firstName: 'Максим',
            lastName: 'Александров',
            city: 'Саратов',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Analytics'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 5,
            firstName: 'Кирилл',
            lastName: 'Кузнецов',
            city: 'Махачкала',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Data Engineer'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 6,
            firstName: 'Георгий',
            lastName: 'Васильев',
            city: 'Пенза',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'DevOps Engineer'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 7, firstName: 'Константин',
            lastName: 'Волков',
            city: 'Саратов',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'System Engineer'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 8, firstName: 'Роман',
            lastName: 'Макеев',
            city: 'Казань',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Data Science'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 9,
            firstName: 'Даниил',
            lastName: 'Клюев',
            city: 'Москва',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Test-Analyst'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 10, firstName: 'Александр',
            lastName: 'Муратов',
            city: 'Санкт-Петербург',
            phone: '89998752587',
            email: 'mail@mail.ru',
            nap: 'Java development'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 11, firstName: 'Артём',
            lastName: 'Семенов',
            city: 'Сочи',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Frontend'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 12,
            firstName: 'Варвара',
            lastName: 'Антонова',
            city: 'Краснодар',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Testing'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 13, firstName: 'Милана',
            lastName: 'Данилова',
            city: 'Краснодар',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Analytics'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 14, firstName: 'Александра',
            lastName: 'Некрасова',
            city: 'Москва',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'Data Engineer'
        },
        {
            statementStatus: 'предзаявка' ,
            id: 15,
            firstName: 'Виктория',
            lastName: 'Парфенова',
            city: 'Пенза',
            phone: '89999999999',
            email: 'mail@mail.ru',
            nap: 'DevOps Engineer'
        },
    ]);
    const [filterCity, setFilterCity] = useState<string | null>(null);
    const [filterCourse, setFilterCourse] = useState<string | null>(null);


    const cities = [...new Set(preAcceptedUser.map((item) => item.city))].sort();

    const courses = [...new Set(preAcceptedUser.map((item) => item.nap))].sort();

    const filterpreAcceptedUser = preAcceptedUser.filter(item =>
        (filterCity ? item.city === filterCity : true) &&
        (filterCourse ? item.nap === filterCourse : true) &&
        item.statementStatus === "предзаявка"
    );


    return (
        <>
            <div className="d-flex justify-content-start align-items-center">
                <div className="me-4">
                    Фильтрация
                </div>
                <div className="me-4">
                    <DropdownButton
                        id="dropdown-city-button"
                        title={filterCity ? filterCity : "Город"}
                    >
                        <Dropdown.Item
                            as="button"
                            onClick={() => setFilterCity(null)}
                        >
                            Нет фильтра
                        </Dropdown.Item>
                        {cities.map((city) => (
                            <Dropdown.Item
                                as="button"
                                key={city}
                                onClick={() => setFilterCity(city)}
                            >
                                {city}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>

                <div>
                    <DropdownButton
                        id="dropdown-course-button"
                        title={filterCourse ? filterCourse : "Направление"}
                    >
                        <Dropdown.Item
                            as="button"
                            onClick={() => setFilterCourse(null)}
                        >
                            Нет фильтра
                        </Dropdown.Item>
                        {courses.map((nap) => (
                            <Dropdown.Item
                                as="button"
                                key={nap}
                                onClick={() => setFilterCourse(nap)}
                            >
                                {nap}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            </div>


            <Row xs={1} md={2} xl={4} className="mt-4">
                {filterpreAcceptedUser.map(item => (
                        <Col>
                            <PACardItem items={item} key={item.statementId}/>
                        </Col>
                    )
                )}
            </Row>
        </>
    )
        ;
}

export default PaCardList;