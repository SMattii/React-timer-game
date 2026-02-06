import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {
    const dialog = useRef();

    const userLost = timeRemaining <= 0;
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            <h2>You {userLost ? 'lost' : 'won'}!</h2>
            {!userLost && <p> Your score was {score} out of 100</p>}
            <p> Target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
            <p> You stopped the timer with {formattedTimeRemaining} seconds left</p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog >
        , document.getElementById('modal'));
});

export default ResultModal;