import { useContext } from 'react';
import { ApiProvider } from './context/api.context';
import { ModalContext, ModalProvider } from './context/modal.context';
import { Home } from './views/home';

function App() {
    useContext(ModalContext)
    return (
            <ApiProvider>
                <ModalProvider>
                    <Home />
                </ModalProvider>
            </ApiProvider>
    );
}

export default App;
