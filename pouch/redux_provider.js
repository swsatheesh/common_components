import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import createStoreHelper from '../redux/create_store_helper';

class ReduxProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            store: undefined
        };
    }
    componentDidMount() {
        this.createReduxStore();
    }
    createReduxStore() {
        this.setState({
            isLoading: false,
            store: createStoreHelper(this.props.reducers, this.props.config)
        });
    }
    render() {
        if (this.state.isLoading) {
            return <div>{'LOADING, please wait.'}</div>;
        }
        return(
            <Provider store={this.state.store}>
                <Router>
                    {Children.only(this.props.children)}
                </Router>
            </Provider>
        );
    }
}

PouchProvider.propTypes = {
    children: PropTypes.element,
    reducers: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired
};

export default ReduxProvider;