import React from 'react';

import Clock from 'app/components/Clock';
import CountdownForm from 'app/components/CountdownForm';
import Controls from 'app/components/Controls';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
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

    startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000)
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }

    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        })
    }

    render() {

        var {count, countdownStatus} = this.state;

        var renderControlArea = () => {
            if(countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
            }
        };

        return (
            <div>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        )
    }
}

export default Countdown;
