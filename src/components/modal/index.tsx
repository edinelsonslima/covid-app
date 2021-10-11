import { useContext } from 'react';
import { ModalContext } from '../../context/modal.context';
import './index.css';

interface ModalProps {
    abbreviation: string;
}

const Modal = (props: ModalProps) => {
    const { setIsModal } = useContext(ModalContext);

    return (
        <section className='section-modal'>
            <h1>{props.abbreviation}</h1>
            <p>edinelson</p>
        </section>
    );
};

export { Modal };

          {
              /* <h1>abbreviation={props.abbreviation}</h1>
            <h1> continent={props.continent}</h1>
            <h1> location={props.location}</h1>
            <h1> population={props.population}</h1>
            <h1> population_density={props.population_density}</h1>
            <h1> people_vaccinated={props.people_vaccinated}</h1>
            <h1> people_fully_vaccinated={props.people_fully_vaccinated}</h1>
            <h1> total_boosters={props.total_boosters}</h1>
            <h1> new_vaccinations={props.new_vaccinations}</h1>
            <h1> total_vaccinations={props.total_vaccinations}</h1>
            <h1> total_tests={props.total_tests}</h1>
            <h1> new_tests={props.new_tests}</h1>
            <h1> reproduction_rate={props.reproduction_rate}</h1>
            <h1> icu_patients={props.icu_patients}</h1>
            <h1> total_deaths={props.total_deaths}</h1>
            <h1> new_deaths={props.new_deaths}</h1>
            <h1> total_cases={props.total_cases}</h1>
            <h1> new_cases={props.new_cases}</h1> */
          }

 // const abbreviation = initials;

                // const location = infos.location || 'sem registro';

                // const continent = infos.continent || 'sem registro';

                // const total_cases = infos.data.slice(-1)[0].total_cases
                //     ? infos.data
                //           .slice(-1)[0]
                //           .total_cases.toLocaleString('pt-br')
                //     : 'sem registro';

                // const total_deaths = infos.data.slice(-1)[0].total_deaths
                //     ? infos.data
                //           .slice(-1)[0]
                //           .total_deaths.toLocaleString('pt-br')
                //     : 'sem registro';

                // const total_vaccinations = infos.data.slice(-1)[0]
                //     .total_vaccinations
                //     ? infos.data
                //           .slice(-1)[0]
                //           .total_vaccinations.toLocaleString('pt-br')
                //     : 'sem registro';

                // const population = infos.data.slice(-1)[0].population
                //     ? infos.data.slice(-1)[0].population.toLocaleString('pt-br')
                //     : 'sem registro';

                // const population_density = infos.data.slice(-1)[0]
                //     .population_density
                //     ? infos.data
                //           .slice(-1)[0]
                //           .population_density.toLocaleString('pt-br')
                //     : 'sem registro';

                // const people_vaccinated = infos.data.slice(-1)[0]
                //     .people_vaccinated
                //     ? infos.data
                //           .slice(-1)[0]
                //           .people_vaccinated.toLocaleString('pt-br')
                //     : 'sem registro';

                // const people_fully_vaccinated = infos.data.slice(-1)[0]
                //     .people_fully_vaccinated
                //     ? infos.data
                //           .slice(-1)[0]
                //           .people_fully_vaccinated.toLocaleString('pt-br')
                //     : 'sem registro';

                // const total_boosters = infos.data.slice(-1)[0].total_boosters
                //     ? infos.data
                //           .slice(-1)[0]
                //           .total_boosters.toLocaleString('pt-br')
                //     : 'sem registro';

                // const new_vaccinations = infos.data.slice(-1)[0]
                //     .new_vaccinations
                //     ? infos.data
                //           .slice(-1)[0]
                //           .new_vaccinations.toLocaleString('pt-br')
                //     : 'sem registro';

                // const total_tests = infos.data.slice(-1)[0].total_tests
                //     ? infos.data
                //           .slice(-1)[0]
                //           .total_tests.toLocaleString('pt-br')
                //     : 'sem registro';

                // const new_tests = infos.data.slice(-1)[0].new_tests
                //     ? infos.data.slice(-1)[0].new_tests.toLocaleString('pt-br')
                //     : 'sem registro';

                // const reproduction_rate = infos.data.slice(-1)[0]
                //     .reproduction_rate
                //     ? infos.data
                //           .slice(-1)[0]
                //           .reproduction_rate.toLocaleString('pt-br')
                //     : 'sem registro';

                // const icu_patients = infos.data.slice(-1)[0].icu_patients
                //     ? infos.data
                //           .slice(-1)[0]
                //           .icu_patients.toLocaleString('pt-br')
                //     : 'sem registro';

                // const new_deaths = infos.data.slice(-1)[0].new_deaths
                //     ? infos.data.slice(-1)[0].new_deaths.toLocaleString('pt-br')
                //     : 'sem registro';

                // const new_cases = infos.data.slice(-1)[0].new_cases
                //     ? infos.data.slice(-1)[0].new_cases.toLocaleString('pt-br')
                //     : 'sem registro';
