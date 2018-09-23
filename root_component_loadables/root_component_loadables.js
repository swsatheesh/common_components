import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComponentMap from "./component_map";

class RootComponentLoadables extends Component {
    constructor() {
        this.coponents = null;
    }
    componentDidMount() {
        this.coponents = ComponentMap(rootComponents);
    }
    render() {
        const RenderComp = this.coponents.get(this.props.selectedRoute);
        return <RenderComp />;
    }
}

RootComponentLoadables.propTypes = {
    rootComponents: PropTypes.instanceOf(Map),
    selectedRoute: PropTypes.string.isRequired
};

export default RootComponentLoadables;