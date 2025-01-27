import {Col, Dropdown, DropdownButton, Form, Row} from "react-bootstrap";
import {useState} from "react";
import CardItem from "../CardItem/CardItem.tsx";

function CardList() {
    const acceptedUser = useState([
        {
            statementStatus: 'Принятo' ,
            statementId: 1,
            firstName: 'Иван',
            lastName: 'Иванов',
            city: 'Москва',
            phoneNumber: '89998752587',
            email: 'mail@mail.ru',
            course: 'Java development'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 2,
            firstName: 'Тимофей',
            lastName: 'Рудаков',
            city: 'Воронеж',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Frontend'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 3,
            firstName: 'Тимур',
            lastName: 'Дементьев',
            city: 'Пенза',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Testing'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 4,
            firstName: 'Максим',
            lastName: 'Александров',
            city: 'Саратов',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Analytics'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 5,
            firstName: 'Кирилл',
            lastName: 'Кузнецов',
            city: 'Махачкала',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Data Engineer'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 6,
            firstName: 'Георгий',
            lastName: 'Васильев',
            city: 'Пенза',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'DevOps Engineer'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 7, firstName: 'Константин',
            lastName: 'Волков',
            city: 'Саратов',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'System Engineer'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 8, firstName: 'Роман',
            lastName: 'Макеев',
            city: 'Казань',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Data Science'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 9,
            firstName: 'Даниил',
            lastName: 'Клюев',
            city: 'Москва',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Test-Analyst'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 10, firstName: 'Александр',
            lastName: 'Муратов',
            city: 'Санкт-Петербург',
            phoneNumber: '89998752587',
            email: 'mail@mail.ru',
            course: 'Java development'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 11, firstName: 'Артём',
            lastName: 'Семенов',
            city: 'Сочи',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Frontend'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 12,
            firstName: 'Варвара',
            lastName: 'Антонова',
            city: 'Краснодар',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Testing'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 13, firstName: 'Милана',
            lastName: 'Данилова',
            city: 'Краснодар',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Analytics'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 14, firstName: 'Александра',
            lastName: 'Некрасова',
            city: 'Москва',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'Data Engineer'
        },
        {
            statementStatus: 'Принятo' ,
            statementId: 15,
            firstName: 'Виктория',
            lastName: 'Парфенова',
            city: 'Пенза',
            phoneNumber: '89999999999',
            email: 'mail@mail.ru',
            course: 'DevOps Engineer'
        }
    ]);
    const [filterCity, setFilterCity] = useState<string | null>(null);
    const [filterCourse, setFilterCourse] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');


    const cities = [...new Set(acceptedUser.map((item) => item.city))].sort();


    const courses = [...new Set(acceptedUser.map((item) => item.course))].sort();


    const filterAcceptedUser = acceptedUser.filter(item =>
        (filterCity ? item.city === filterCity : true) &&
        (filterCourse ? item.course === filterCourse : true) &&
        item.statementStatus === "Принято" &&
        (item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.course.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

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
                        {courses.map((course) => (
                            <Dropdown.Item
                                as="button"
                                key={course}
                                onClick={() => setFilterCourse(course)}
                            >
                                {course}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
                <div className="ms-auto">
                    <Form.Control
                        type="text"
                        id="inputQuery"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Поиск по имени, фамилии, городу, направлению"
                    />
                </div>
            </div>
            <Row xs={1} md={2} xl={4} className="mt-4">
                {filterAcceptedUser.map(item => (
                        <Col>
                            <CardItem items={item} key={item.statementId}/>
                        </Col>
                    )
                )}
            </Row>
        </>

    );
}

export default CardList;