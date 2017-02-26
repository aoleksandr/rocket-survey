export default function() {
    let state = {
        stage: 0,
        question: 0
    };

    return {
        getState() {
            return state;
        },
        nextStage() {
            state.stage += 1;
            state.question = 0;
        },
        nextQuestion() {
            state.question += 1;
        }
    };
}