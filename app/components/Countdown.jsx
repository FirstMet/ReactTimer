import React from 'react';
import Clock from 'app/components/Clock';

class Countdown extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-center">Countdown</h2>
                <Clock totalSeconds={129} />
            </div>
        )
    }
}

export default Countdown;
