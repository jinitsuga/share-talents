import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from "./firebaseConfig";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";

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

async function getSet(link: string) {
  const q = query(collection(db, "sets"), where("link", "==", link));
  console.log(q);

  const querySnap = await getDocs(q);

  querySnap.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}

export { postSet, getSet };
