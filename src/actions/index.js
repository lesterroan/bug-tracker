import { rootRef } from "../config/firebase";

export const fetchData = async (type) => {
    console.log("Fetching Data")
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