"use client";
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../lib/firebase';

export default function Guest() {

interface IGuest {
    name: string
    phone: string
}

const [ guest, setGuest ] = useState<IGuest[]>()

useEffect(() => {
    listGuest()
}, [])

async function listGuest() {
    const querySnapshot = await getDocs(collection(firestore, "guest"));
    var guests: any[] = []
    querySnapshot.forEach((doc) => { 
        guests.push(doc.data()) 
      });
    guests.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    
    setGuest(guests)
}

  return (
    <div className="grid grid-cols-2 w-1/2 mx-auto max-sm:p-2 bg-marinho p-10 mt-10 rounded-lg bg-opacity-80
                    max-sm:flex max-sm:flex-col max-sm:w-full max-sm:mt-10 max-sm:h-screen max-sm:rounded-none max-sm:bg-white max-sm:text-marinho">
        <div className="text-wedding-500 text-2xl font-bold max-sm:text-xl">
            Numero de convidados confirmados: {guest?.length}
        </div>
        <div className="text-white text-2xl flex flex-col items-center w-full font-bold max-sm:text-xl max-sm:mt-4 max-sm:text-marinho">
           <ol className="list-decimal">
                {guest?.map(item => (
                    <li key={item.phone}> {item.name} </li>
                ))}
           </ol>
            
        </div>
        
    </div>
  )
}
