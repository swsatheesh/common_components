import Loadable from "react-loadable";
import LoadingComponent from "./loading-component";

const ComponentsAPI = {
    component: [],
    all: function () { return this.component },
    get: function (id) {
        const isPlayer = p => p.key === id
        return this.component.find(isPlayer)
    }
}

export const LoadablesComponentMap = (ComponentsInMap) => {
    const componentsWithLoadables = ComponentsInMap.reduce((accumulator, current) => {
        accumulator.push({
            key: current.key,
            component: Loadable({
                loader: () => import(current.value),
                loading: LoadingComponent,
            })
        });
    }, []);
    ComponentsAPI.component = componentsWithLoadables;
    return ComponentsAPI;
};


export default LoadablesComponentMap;