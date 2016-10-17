import React from 'react';

import Clock from 'app/components/Clock';
import Controls from 'app/components/Controls'

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            })

        }, 1000)
    }

    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        })
    }

    render() {
        return (
            <div>
                <Clock totalSeconds={this.state.count} />
                <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />
            </div>
        )
    }
}

export default Timer;
