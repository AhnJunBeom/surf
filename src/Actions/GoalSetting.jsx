import { GOAL_SETTING } from "../Constants/ActionTypes"

export const setGoal = (goalInformation) =>
({
    type: GOAL_SETTING,
    goalName: goalInformation.goalName,
    term: goalInformation.term,
    tasks: goalInformation.tasks,
})