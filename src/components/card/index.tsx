import './index.css';

interface CardProps {
    name: string;
    total_cases: number;
    total_deaths: number;
    total_vaccinations: number;
}

const Card = (props: CardProps) => {
    return (
        <div className='card-body'>
            <h2 className='card-title'>{props.name}</h2>
            <div className="card-infos-content">
                <p className="card-infos">Casos: {props.total_cases}</p>
                <p className="card-infos">Mortes: {props.total_deaths}</p>
                <p className="card-infos">Vacinados: {props.total_vaccinations}</p>
            </div>
        </div>
    );
};

export { Card };
