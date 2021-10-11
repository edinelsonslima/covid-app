import { useContext, useState } from 'react';
import { ApiContext } from '../../context/api.context';
import './index.css';

const Search = () => {
    const { loading } = useContext(ApiContext);;
    const [search, setSearch] = useState('');

    if (!loading) {
        const cards = document.querySelectorAll('.card-body');
        if (cards.length > 0) {
            Object.values(cards).map((card) => {
                const title = card.querySelector('.card-title')?.textContent;
                const initials =
                    card.querySelector('.abbreviation')?.textContent;
                let express = new RegExp(search, 'i');
                if (title && initials) {
                    if (express.test(title) || express.test(initials)) {
                        card.classList.remove('none');
                    } else {
                        card.classList.add('none');
                    }
                }
                return card;
            });
        } else {
            Object.values(cards).map((card) => {
                card.classList.remove('none');
                return card;
            });
        }
    }

    return (
        <input
            type='text'
            className='search-country'
            id='search-country'
            value={search}
            onChange={(e) => {
                setSearch(e.target.value);
            }}
            placeholder='Busque por um país'
        />
    );
};

export { Search };
