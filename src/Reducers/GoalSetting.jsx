import { GOAL_SETTING } from '../Constants/ActionTypes';

const initialState = {
    goalName : '',
    term : null,
    tasks : [],
}

const goalSetting = (state = initialState, action) => {
    switch (action.type) {
        case GOAL_SETTING:
            return {
                ...state,
                goalName: action.goalName,
                term: action.term,
                tasks: action.tasks,
            };
        default:
            return state;
    }
}
export default goalSetting;