import React, { Component } from 'react';

const withSplitting = getComponent => {
    class WithSplitting extends Component {
        static Splitted = null;
        static preload() {
            getComponent().then(({ default: Splitted }) => {
                WithSplitting.Splitted = Splitted;
            });
        }

        state = {
            Splitted: WithSplitting.Splitted
        }

        constructor(props) {
            super(props);
            getComponent().then(({ default: Splitted }) => {
                this.setState({
                    Splitted
                });
            });
        }

        render() {
            const { Splitted } = this.state;
            if (!Splitted) {
                return null;
            }
            return <Splitted {...this.props} />
        }
    }

    return WithSplitting;
};

export default withSplitting;