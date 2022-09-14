import React, { createContext, useContext, useReducer } from 'react'

const DataLayerContext = createContext()

const DataContext = ({ initialStates, reducer, children }) => {
    return (
        <DataLayerContext.Provider value={useReducer(reducer, initialStates)}>{children}</DataLayerContext.Provider>
    )
}
export const useDataLayerValue = () => useContext(DataLayerContext)
export default DataContext