import { doc, getDoc, getFirestore } from "firebase/firestore";

export const getData = async () => {
    const db = getFirestore();
    const docRef = doc(db, "questions", "IWB3v5E5DNNvRItWJyDO");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

}
