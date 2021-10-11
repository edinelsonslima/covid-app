import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Main } from '../../components/main';
import { Search } from '../../components/search';
import { ApiProvider } from '../../context/api.context';
import { ModalProvider } from '../../context/modal.context';

const Home = () => {
    return (
        <ApiProvider>
            <ModalProvider>
                <Header />
                <Search />
                <Main />
                <Footer />
            </ModalProvider>
        </ApiProvider>
    );
};

export { Home };
