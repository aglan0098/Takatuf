import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../firebase_setup/firebase";

const handleSubmit = (testdata) => {
    const ref = collection(db, "trainers-data");

    let data = {
        testData: testdata
    }

    try {
        addDoc(ref, data)
    } catch (error) {
        console.log(error)
    }
}

export default handleSubmit