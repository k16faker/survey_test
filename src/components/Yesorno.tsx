import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Yesorno = () => {
  const [yesno, setYesno] = useState<boolean | null>(null);
  const [databaseYes, setDatabaseYes] = useState<number>(0);
  const [databaseNo, setDatabaseNo] = useState<number>(0);
  let yesnotext: string = "";

  if (yesno === true) {
    yesnotext = "Yes!";
  } else if (yesno === false) {
    yesnotext = "No!";
  }

  const changeToYes = () => {
    setYesno(true);
    console.log(yesno);
  };
  const changeToNo = () => {
    setYesno(false);
    console.log(yesno);
  };

  const getYes = async () => {
    const docRef = doc(db, "yesno", "yesno");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDatabaseYes(docSnap.data().yes);
      console.log("Yes data:", docSnap.data().yes);
    } else {
      console.log("No such document!");
    }
  };

  const addYes = async () => {
    const docRef = doc(db, "yesno", "yesno");
    await setDoc(docRef, { yes: databaseYes + 1, no: databaseNo });
    getYes();
  };

  const getNo = async () => {
    const docRef = doc(db, "yesno", "yesno");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDatabaseNo(docSnap.data().no);
      console.log("No data:", docSnap.data().yes);
    } else {
      console.log("No such document!");
    }
  };

  const addNo = async () => {
    const docRef = doc(db, "yesno", "yesno");
    await setDoc(docRef, { yes: databaseYes, no: databaseNo + 1 });
    getNo();
  };

  useEffect(() => {
    getYes();
    getNo();
  }, []);


  return (
    <div className="my-7">
      <p className="mb-5">서비스는 만족스러우셨나요?</p>
      <p>{yesnotext}</p>
      <div className="flex">
        <button
          onClick={addYes}
          value={"Yes!"}
          className="bg-blue-500 hover:bg-blue-700 w-1/2 ml-1 h-[100px] text-white font-bold py-2 px-4 rounded"
        >
          예
        </button>
        <button
          onClick={addNo}
          value={"No!"}
          className="bg-red-500 hover:bg-red-700 w-1/2 mr-1 text-white font-bold py-2 px-4 rounded"
        >
          아니오
        </button>
      </div>
    </div>
  );
};

export default Yesorno;
