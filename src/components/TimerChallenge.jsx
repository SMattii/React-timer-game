import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                timeRemaining={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    <span>Time Limit: {targetTime} second{targetTime > 1 ? 's' : ''}</span>
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}

export default TimerChallenge;