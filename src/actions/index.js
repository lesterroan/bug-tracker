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


    let allData = [];
    let ref = rootRef.collection(type);
    let fetchedData = await ref.get();
    fetchedData.forEach(doc => {
        const data = doc.data();
        allData.push({ ...data, docID: doc.id })
    })
    console.log(allData)
    return allData;
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

export const update = async (collection, docID, data) => {

    console.log("docId", docID);
    console.log("data", data);
    let res = await rootRef.collection(collection).doc(docID).update(data);
}