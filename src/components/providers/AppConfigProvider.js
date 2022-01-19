// ref: https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/

import {useState} from "react";
import { createContext, useContext } from 'react'

const AppConfigContext = createContext({});

export const AppConfigProvider = ({ children, defaultConfig }) => {

    const [config, setConfig] = useState(defaultConfig);

    return (
        <AppConfigContext.Provider value={{config, setConfig}}>
            {children}
        </AppConfigContext.Provider>
    )
}

export const useAppConfig = () => useContext(AppConfigContext)