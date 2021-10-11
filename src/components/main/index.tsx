import { Card } from '../card';
import './index.css';
import { useContext, useEffect, useState } from 'react';
import { Loading } from '../loading/index';
import { ApiContext } from '../../context/api.context';

const Main = () => {
    const { loading, data } = useContext(ApiContext);
    const [cards, setCards] = useState({});

    useEffect(() => {
        handlerCards(data);
    }, [data]);

    function handlerCards(covid: any) {
        const ArrayAux: JSX.Element[] = [];
        Object.entries(covid).map((value: [string, any], index: number) => {
            const [initials, infos] = value;

            const abbreviation = initials;

            const location = infos.location || 'sem registro';

            const total_cases = infos.data.slice(-1)[0].total_cases
                ? infos.data.slice(-1)[0].total_cases.toLocaleString('pt-br')
                : 'sem registro';

            const total_deaths = infos.data.slice(-1)[0].total_deaths
                ? infos.data.slice(-1)[0].total_deaths.toLocaleString('pt-br')
                : 'sem registro';

            const total_vaccinations = infos.data.slice(-1)[0]
                .total_vaccinations
                ? infos.data
                      .slice(-1)[0]
                      .total_vaccinations.toLocaleString('pt-br')
                : 'sem registro';

            ArrayAux.push(
                <Card
                    abbreviation={abbreviation}
                    location={location}
                    total_cases={total_cases}
                    total_deaths={total_deaths}
                    total_vaccinations={total_vaccinations}
                    key={index}
                />
            );
            return ArrayAux;
        });
        setCards(ArrayAux);
    }

    return (
        <main className='main-app'>
            {loading ? (
                <Loading />
            ) : (
                Object.values(cards).map((card) => {
                    return card;
                })
            )}
        </main>
    );
};

export { Main };
