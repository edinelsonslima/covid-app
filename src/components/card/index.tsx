import { useContext } from 'react';
import { ModalContext } from '../../context/modal.context';
import './index.css';

interface CardProps {
    abbreviation: string;
    location: string;
    total_vaccinations: number;
    total_deaths: number;
    total_cases: number;
}

const Card = (props: CardProps) => {
    const { setIsModal, setIsAbbr } = useContext(ModalContext);

    return (
        <>
           
            <div
                className='card-body'
                onClick={() => {
                    setIsAbbr(props.abbreviation)
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
