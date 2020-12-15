import { rootRef } from "../config/firebase";
import { FETCH_TODOS } from "./types";

// export const addToDo = newToDo => async dispatch => {
//     // todosRef.push().set(newToDo);
// };

// export const completeToDo = completeToDoId => async dispatch => {
//     console.log('completeToDo');
//     // todosRef.child(completeToDoId).remove();
// };

export const fetchData = async (type) => {
    console.log("Fetching Data")
    // todosRef.on("value", snapshot => {
    //     console.log("Fetched Data:", snapshot.val())
    //     dispatch({
    //         type: FETCH_TODOS,
    //         payload: snapshot.val()
    //     });
    // });


    let data = [];
    let issuesRef = rootRef.collection(type);
    let allIssues = await issuesRef.get();
    allIssues.forEach(doc => {
        data.push(doc.data())
    })
    return data;
};

export const getInfoByTypeId = async (type, typeId, id) => {
    console.log("type", type);
    let info = {};
    let data = await rootRef.collection(type).where(typeId, "==", id).get()

    for (const doc of data.docs) {
        info = doc.data();
    }

    return info;
}

export const update = async (type, typeId, id, data) => {

    let res = await rootRef.collection(type).where(typeId, "==", id).update(data).then(res => res);
}