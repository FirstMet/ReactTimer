import React from 'react';
import Clock from 'app/components/Clock';
import CountdownForm from 'app/components/CountdownForm';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Countdown</h2>
                <Clock totalSeconds={this.state.count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
            </div>
        )
    }
}

export default Countdown;
