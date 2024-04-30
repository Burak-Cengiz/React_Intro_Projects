import {createStore,compose} from "redux"

import reducers from "./index"

const configureStore = () => {
    return createStore(reducers,compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
    
}

export default configureStore 