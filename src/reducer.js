import * as actions from './actionTypes'
import firebase from 'firebase';


const data = async () => {
    const db = firebase.firestore();
    const data = await db.collection('projects').get();
    // return data.docs.map(project => project.data());
    return "kdjfkdfjk"
}

let reducer = (state = [{ projects: data() }], action) => {
    // if (action.type === actions.BUG_ADDED) {

    //     return [...state, { id: ++lastId, description: action.payload.description, isResolved: false }]
    // } else if (action.type === actions.BUG_REMOVED) {
    //     return state.filter(bug => bug.id !== action.payload.id);
    // } else if (action.type === actions.BUG_RESOLVED) {
    //     return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, isResolved: true })
    // }

    return state //you must return the current state is neither of the actions above, your don't want the system to blow up
}

export default reducer;