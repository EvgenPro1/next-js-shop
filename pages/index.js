import {MainContainer} from "../component/MainContainer";

const Index = () => {
    return (<MainContainer name= 'Main page'>

            <div className='d-flex justify-content-center mt-5'>
                    <p className="container-fluid font-weight-bold">
                        Данный магазин являлся очередным домашним заданием,
                        написанном с использованием React (на React-хуках без Redux),
                        React + Redux и для портфолио переписан на Next.JS
                        с использованием fakestoreapi.
                        Внимание дизайну уделалось не много т.к. основная задача - это продемонстрировать уровень понимания фрейморков и библиотек.
                        Для оформления дизайна использован bootstrap.
                    </p>
            </div>
        </MainContainer>);
};

export default Index;