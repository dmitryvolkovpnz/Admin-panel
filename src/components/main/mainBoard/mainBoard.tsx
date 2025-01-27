import {useState} from "react";
import './mainBoard.scss'
import {Card} from "react-bootstrap";

function MainBoard() {
    const [boards, setBoards] = useState([
        {id: 1, title:"Входящие", items:[
            {
                statementStatus: 'Входящий' ,
                id: 1,
                firstName: 'Иван',
                lastName: 'Иванов',
                city: 'Москва',
                phone: '89998752587',
                email: 'mail@mail.ru',
                nap: 'Java development'
            },
                {
                    statementStatus: 'Входящий' ,
                    id: 2,
                    firstName: 'Тимофей',
                    lastName: 'Рудаков',
                    city: 'Воронеж',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Frontend development'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 3,
                    firstName: 'Тимур',
                    lastName: 'Дементьев',
                    city: 'Пенза',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Testing'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 4,
                    firstName: 'Максим',
                    lastName: 'Александров',
                    city: 'Саратов',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Analytics'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 5,
                    firstName: 'Кирилл',
                    lastName: 'Кузнецов',
                    city: 'Махачкала',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Data Engineer'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 6,
                    firstName: 'Георгий',
                    lastName: 'Васильев',
                    city: 'Пенза',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'DevOps Engineer'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 7, firstName: 'Константин',
                    lastName: 'Волков',
                    city: 'Саратов',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'System Engineer'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 8, firstName: 'Роман',
                    lastName: 'Макеев',
                    city: 'Казань',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Data Science'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 9,
                    firstName: 'Даниил',
                    lastName: 'Клюев',
                    city: 'Москва',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Test-Analyst'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 10, firstName: 'Александр',
                    lastName: 'Муратов',
                    city: 'Санкт-Петербург',
                    phone: '89998752587',
                    email: 'mail@mail.ru',
                    nap: 'Java development'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 11, firstName: 'Артём',
                    lastName: 'Семенов',
                    city: 'Сочи',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Frontend development'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 12,
                    firstName: 'Варвара',
                    lastName: 'Антонова',
                    city: 'Краснодар',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Testing'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 13, firstName: 'Милана',
                    lastName: 'Данилова',
                    city: 'Краснодар',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Analytics'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 14, firstName: 'Александра',
                    lastName: 'Некрасова',
                    city: 'Москва',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'Data Engineer'
                },
                {
                    statementStatus: 'Входящий' ,
                    id: 15,
                    firstName: 'Виктория',
                    lastName: 'Парфенова',
                    city: 'Пенза',
                    phone: '89999999999',
                    email: 'mail@mail.ru',
                    nap: 'DevOps Engineer'
                },
            ]},
        {id: 2, title:"В ожидании", items:[]},
        {id: 3, title:"Принята", items:[]},
        {id: 4, title:"Отклонена", items:[]},
    ])
    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    function dragOverHandler(e){
        e.preventDefault()
        if (e.target.className === 'item'){
            e.target.style.boxShadow = '0 2px 3px gray'
        }
    }
    function dragLeaveHandler(e){
        e.target.style.boxShadow = 'none'
    }
    function dragStartHandler(e, board, item){
        setCurrentBoard(board)
        setCurrentItem(item)
    }
    function dragEndHandler(e){
        e.target.style.boxShadow = 'none'
    }
    function dragHandler(e, board, item){
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1,0,  currentItem)
        setBoards(boards.map(b=>{
            if (b.id === board.id){
                return board
            }
            if (b.id === currentBoard.id){
                return currentBoard
            }
            return b
        }))
    }



    function getCardColor(status) {
        switch(status) {
            case "В ожидании":
                return "warning";
            case "Принята":
                return "success";
            case "Отклонена":
                return "danger";
            default:
                return "primary";
        }
    }

    function dropCardHandler(e, board) {
        if (board.items.some(item => item.id === currentItem.id)) {
            return;
        }

        const updatedItem = { ...currentItem, statementStatus: board.title };

        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        board.items.push(updatedItem);

        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board;
            }
            if (b.id === currentBoard.id) {
                return currentBoard;
            }
            return b;
        }));
    }


    return (
        <div className="App">
            {boards.map(board =>
                <div
                    className='board'
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                >
                    <div className='board__title'>{board.title}</div>
                    {board.items.map(item =>
                        <div
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dragHandler(e, board, item)}
                            draggable={true}
                            className='item'
                        >
                            <Card bg={getCardColor(item.statementStatus)} className="mt-2 mb-2">
                                <Card.Header>
                                    <div className="d-flex justify-content-between">
                                                <span>
                                                    Статус
                                                </span>
                                                <span>
                                                    {item.statementStatus}
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
                                                        {item.firstName}
                                                    </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                                    <span>
                                                        Фамилия
                                                    </span>
                                            <span>
                                                        {item.lastName}
                                                    </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                                    <span>
                                                        Город проживания
                                                    </span>
                                            <span>
                                                        {item.city}
                                                    </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                                    <span>
                                                        Номер телефона
                                                    </span>
                                            <span>
                                                        {item.phone}
                                                    </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                                    <span>
                                                        Электронная почта
                                                    </span>
                                            <span>
                                                        {item.email}
                                                    </span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                                    <span>
                                                        Направление
                                                    </span>
                                            <span>
                                                    {item.nap}
                                                    </span>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MainBoard;