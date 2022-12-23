import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from "./firebaseConfig";

import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

import { Build } from "./Components/CreateBuild/CreateBuild";

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

async function postSet(link: string, builds: Array<Build>) {
  const setRef = doc(collection(db, "sets"));

  const setData = { link: link, builds: builds };

  await setDoc(setRef, setData);
}

export { postSet };
