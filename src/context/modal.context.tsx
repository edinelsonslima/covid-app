import { createContext, useMemo, useState } from 'react';

interface ModalProviderProps {
    children: JSX.Element[] | JSX.Element;
}

interface ModalContextProps {
    isModal: boolean;
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = (props: ModalProviderProps) => {
    const [isModal, setIsModal] = useState(false);
    
    const value = useMemo(
        () => ({ isModal, setIsModal }),
        [isModal, setIsModal]
    );

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };
