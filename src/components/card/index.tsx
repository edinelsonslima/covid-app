import { useContext, useState } from 'react';
import { ModalContext } from '../../context/modal.context';
import { Modal } from '../modal';
import './index.css';

interface CardProps {
    abbreviation: string;
    location: string;
    total_vaccinations: number;
    total_deaths: number;
    total_cases: number;
}

const Card = (props: CardProps) => {
    const { isModal, setIsModal } = useContext(ModalContext);
    const [showModal, setShowModal] = useState({});

    function handleModal(abbr: string) {
        const arrayAux = [<Modal abbreviation={abbr}/>]
        setShowModal(arrayAux);
    }

    return (
        <>
            {isModal ? Object.values(showModal).map(show => show) : ''}
            <div
                className='card-body'
                onClick={() => {
                    handleModal(props.abbreviation);
                    setIsModal(true);
                }}
            >
                <h2 className='card-title'>{props.location}</h2>
                <div className='card-infos-content'>
                    <p className='card-infos'>Casos: {props.total_cases}</p>
                    <p className='card-infos'>Mortes: {props.total_deaths}</p>
                    <p className='card-infos'>
                        Vacinados: {props.total_vaccinations}
                    </p>
                    <span className='abbreviation'>{props.abbreviation}</span>
                </div>
            </div>
        </>
    );
};

export { Card };
