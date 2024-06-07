"use client";
import { FormEvent, useEffect, useState } from "react";
import InputMask from "react-input-mask";

import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import { firestore } from "../../lib/firebase";

interface IGuest {
  name: string;
  phone: string;
}

export default function Confirm() {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [confirmed, setConfirmed] = useState<string>("");

  async function confirmGuest(event: FormEvent) {
    event.preventDefault();
    setConfirmed("");

    const guests = listGuest(phone);

    if (!name || !phone) {
      setConfirmed("Ops. É necessário digitar email e celular!");
      return;
    } else if ((await guests)?.length === 0) {
      try {
        const docRef = await addDoc(collection(firestore, "guest"), {
          name: name,
          phone: phone,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Fail");
      }
      setConfirmed("Presença confirmada. Esperamos você!");
    } else {
      setConfirmed("Algo deu errado, ou voce ja está confirmado!");
      return;
    }
  }

  async function listGuest(phone: string | any) {
    if (phone) {
      const guestRef = collection(firestore, "guest");
      const q = query(guestRef, where("phone", "==", phone));
      const querySnapshot = await getDocs(q);
      var guests: any[] = [];
      querySnapshot.forEach((doc) => {
        guests.push(doc.data());
      });

      return guests;
    }
  }

  return (

    <div className="bg-white h-screen w-full items-center flex-col">
      <h1 className="text-offwhite text-8xl bg-terracota text-center max-sm:mt-7 font-modernSymphony">
        Confirme sua presença aqui!
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-full flex flex-row mt-10 justify-center max-sm:px-2">
          <form className="text-black max-sm:flex-col" onSubmit={confirmGuest}>
            <input
              className="w-48 h-16 mr-8 pl-3 text-terracota text-2xl border-b border-b-terracota font-light placeholder:text-terracota placeholder:font-light  placeholder:text-2xl focus:outline-none 
                            max-sm:w-full max-sm:mt-2"
              type="text"
              placeholder="Seu Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <InputMask
              mask="(99) 99999-9999"
              className="w-48 h-16 mr-8 pl-3 text-terracota font-light text-2xl border-b border-b-terracota placeholder:text-terracota  placeholder:font-light placeholder:text-2xl focus:outline-none
                            max-sm:w-full max-sm:mt-2"
              type="text"
              placeholder="Seu Celular"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <button
              className="w-32 h-20 bg-offwhite text-terracota text-2xl font-light hover:bg-wedding-100 hover:text-black max-sm:w-full max-sm:mt-4 shadow-2xl rounded-xl"
              type="submit"
            >
              Eu vou
            </button>
          </form>
        </div>
        <div className="flex justify-arround items-center mt-10">
          {confirmed && (
            <p
              className="text-4xl text-terracota font-light flex justify-center text-justify w-full
                        max-sm:mt-2  max-sm:text-2xl max-sm:text-wedding-500"
            >
              {confirmed}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
