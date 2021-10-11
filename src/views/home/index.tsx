import { useContext } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Main } from '../../components/main';
import { Modal } from '../../components/modal';
import { Search } from '../../components/search';
import { ModalContext } from '../../context/modal.context';

const Home = () => {
    const {isAbbr ,isModal } = useContext(ModalContext);
    return (
        <>
            {isModal ? (
                <>
                    <Header />
                    <Modal abbreviation={isAbbr} />
                    <Footer />
                </>
            ) : (
                <>
                    <Header />
                    <Search />
                    <Main />
                    <Footer />
                </>
            )}
        </>
    );
};

export { Home };
