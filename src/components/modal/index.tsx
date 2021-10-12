import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../context/api.context';
import { ModalContext } from '../../context/modal.context';
import './index.css';

interface ModalProps {
    abbreviation: string;
}

const Modal = (props: ModalProps) => {
    const { setIsModal } = useContext(ModalContext);
    const { data } = useContext(ApiContext);

    const [abbreviation, setAbbreviation] = useState('');
    const [continent, setContinent] = useState('');
    const [location, setLocation] = useState('');
    const [population, setPopulation] = useState('');
    const [population_density, setPopulation_density] = useState('');
    const [people_vaccinated, setPeople_vaccinated] = useState('');
    const [people_fully_vaccinated, setPeople_fully_vaccinated] = useState('');
    const [total_boosters, setTotal_boosters] = useState('');
    const [new_vaccinations, setNew_vaccinations] = useState('');
    const [total_vaccinations, setTotal_vaccinations] = useState('');
    const [total_tests, setTotal_tests] = useState('');
    const [new_tests, setNew_tests] = useState('');
    const [reproduction_rate, setReproduction_rate] = useState('');
    const [icu_patients, setIcu_patients] = useState('');
    const [total_deaths, setTotal_deaths] = useState('');
    const [new_deaths, setNew_deaths] = useState('');
    const [total_cases, setTotal_cases] = useState('');
    const [new_cases, setNew_cases] = useState('');

    useEffect(() => {
        Object.entries(data).map((value) => {
            const [initials, infos] = value;
            if (initials === props.abbreviation) {
                setAbbreviation(initials);
                setLocation(infos.location || 'sem registro');
                setContinent(infos.continent || 'sem registro');
                setTotal_cases(
                    infos.data.slice(-1)[0].total_cases
                        ? infos.data
                              .slice(-1)[0]
                              .total_cases.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setTotal_deaths(
                    infos.data.slice(-1)[0].total_deaths
                        ? infos.data
                              .slice(-1)[0]
                              .total_deaths.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setTotal_vaccinations(
                    infos.data.slice(-1)[0].total_vaccinations
                        ? infos.data
                              .slice(-1)[0]
                              .total_vaccinations.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setPopulation(
                    infos.data.slice(-1)[0].population
                        ? infos.data
                              .slice(-1)[0]
                              .population.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setPopulation_density(
                    infos.data.slice(-1)[0].population_density
                        ? infos.data
                              .slice(-1)[0]
                              .population_density.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setPeople_vaccinated(
                    infos.data.slice(-1)[0].people_vaccinated
                        ? infos.data
                              .slice(-1)[0]
                              .people_vaccinated.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setPeople_fully_vaccinated(
                    infos.data.slice(-1)[0].people_fully_vaccinated
                        ? infos.data
                              .slice(-1)[0]
                              .people_fully_vaccinated.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setTotal_boosters(
                    infos.data.slice(-1)[0].total_boosters
                        ? infos.data
                              .slice(-1)[0]
                              .total_boosters.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setNew_vaccinations(
                    infos.data.slice(-1)[0].new_vaccinations
                        ? infos.data
                              .slice(-1)[0]
                              .new_vaccinations.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setTotal_tests(
                    infos.data.slice(-1)[0].total_tests
                        ? infos.data
                              .slice(-1)[0]
                              .total_tests.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setNew_tests(
                    infos.data.slice(-1)[0].new_tests
                        ? infos.data
                              .slice(-1)[0]
                              .new_tests.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setReproduction_rate(
                    infos.data.slice(-1)[0].reproduction_rate
                        ? infos.data
                              .slice(-1)[0]
                              .reproduction_rate.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setIcu_patients(
                    infos.data.slice(-1)[0].icu_patients
                        ? infos.data
                              .slice(-1)[0]
                              .icu_patients.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setNew_deaths(
                    infos.data.slice(-1)[0].new_deaths
                        ? infos.data
                              .slice(-1)[0]
                              .new_deaths.toLocaleString('pt-br')
                        : 'sem registro'
                );
                setNew_cases(
                    infos.data.slice(-1)[0].new_cases
                        ? infos.data
                              .slice(-1)[0]
                              .new_cases.toLocaleString('pt-br')
                        : 'sem registro'
                );
            }

            return initials;
        });
    });

    return (
        <section className='section-modal'>
            <button className='modal-button' onClick={() => setIsModal(false)}>
                VOLTAR
            </button>
            <div className='modal-container'>
                <div className='modal-container-left'>
                    <div className='modal-content-group modal-location'>
                        <div className='modal-content-infos'>
                            <label htmlFor='location'>Localização</label>
                            <p
                                id='location'
                                style={
                                    location === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                            >
                                {location}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='continent'>Continente</label>
                            <p
                                id='continent'
                                style={
                                    continent === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                            >
                                {continent}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='abbreviation'>Sigla</label>
                            <p
                                id='abbreviation'
                                style={
                                    abbreviation === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                            >
                                {abbreviation}
                            </p>
                        </div>
                    </div>

                    <div className='modal-content-group modal-population'>
                        <div className='modal-content-infos'>
                            <label htmlFor='population'>População</label>
                            <p
                                style={
                                    population === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='population'
                            >
                                {population}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='population_density'>
                                Densidade Populacional
                            </label>
                            <p
                                style={
                                    population_density === 'sem registro '
                                        ? {}
                                        : { color: '#a0a0a0' }
                                }
                                id='population_density'
                            >
                                {population_density}
                            </p>
                        </div>
                    </div>
                    <div className='modal-content-group modal-vaccination'>
                        <div className='modal-content-infos'>
                            <label htmlFor='total_vaccinations'>
                                Total de vacinados
                            </label>
                            <p
                                style={
                                    total_vaccinations === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='total_vaccinations'
                            >
                                {total_vaccinations}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='new_vaccinations'>
                                Novos vacinados
                            </label>
                            <p
                                style={
                                    new_vaccinations === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='new_vaccinations'
                            >
                                {new_vaccinations}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='people_vaccinated'>
                                Primeira dose
                            </label>
                            <p
                                style={
                                    people_vaccinated === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='people_vaccinated'
                            >
                                {people_vaccinated}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='people_fully_vaccinated'>
                                Segunda dose ou dose única
                            </label>
                            <p
                                style={
                                    people_fully_vaccinated === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='people_fully_vaccinated'
                            >
                                {people_fully_vaccinated}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='total_boosters'>
                                Dose de reforço
                            </label>
                            <p
                                style={
                                    total_boosters === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='total_boosters'
                            >
                                {total_boosters}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='modal-container-right'>
                    <div className='modal-content-group modal-tests'>
                        <div className='modal-content-infos'>
                            <label htmlFor='total_tests'>Total de testes</label>
                            <p
                                style={
                                    total_tests === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='total_tests'
                            >
                                {total_tests}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='new_tests'>Novos testes</label>
                            <p
                                style={
                                    new_tests === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='new_tests'
                            >
                                {new_tests}
                            </p>
                        </div>
                    </div>

                    <div className='modal-unity  modal-content-group modal-content-infos'>
                        <label htmlFor='reproduction_rate'>
                            Taxa de reprodução
                        </label>
                        <p
                            style={
                                reproduction_rate === 'sem registro'
                                    ? { color: '#a0a0a0' }
                                    : {}
                            }
                            id='reproduction_rate'
                        >
                            {reproduction_rate}
                        </p>
                    </div>

                    <div className='modal-unity modal-content-group modal-content-infos '>
                        <label htmlFor='icu_patients'>Pacientes em UTI</label>
                        <p
                            style={
                                icu_patients === 'sem registro'
                                    ? { color: '#a0a0a0' }
                                    : {}
                            }
                            id='icu_patients'
                        >
                            {icu_patients}
                        </p>
                    </div>

                    <div className='modal-content-group modal-deaths'>
                        <div className='modal-content-infos'>
                            <label htmlFor='total_deaths'>
                                Total de mortos
                            </label>
                            <p
                                style={
                                    total_deaths === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='total_deaths'
                            >
                                {total_deaths}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='new_deaths'>Novos mortos</label>
                            <p
                                style={
                                    new_deaths === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='new_deaths'
                            >
                                {new_deaths}
                            </p>
                        </div>
                    </div>
                    <div className='modal-content-group modal-cases'>
                        <div className='modal-content-infos'>
                            <label htmlFor='total_cases'>Total de casos</label>
                            <p
                                style={
                                    total_cases === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='total_cases'
                            >
                                {total_cases}
                            </p>
                        </div>
                        <div className='modal-content-infos'>
                            <label htmlFor='new_cases'>Novos casos</label>
                            <p
                                style={
                                    new_cases === 'sem registro'
                                        ? { color: '#a0a0a0' }
                                        : {}
                                }
                                id='new_cases'
                            >
                                {new_cases}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Modal };
