import { db } from '../firebase';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';


export function useCases(id) {

    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(false);
    let filteredCase;



    useEffect(() => {
        setLoading(true);
        try {

            onValue(ref(db), (snapshot) => {
                setCases([]);
                const data = snapshot.val();
                if (data !== null) {
                    Object.values(data).map((caja) => {
                        setCases((oldCajas) => [...oldCajas, caja]);
                    });
                }
            });
        } finally {
            setLoading(false);
        }
    }, [])

    if (id) {
        cases.forEach(casse => {
            if (casse.id == id) {
                filteredCase = casse;
            }
        })
    }


    return { cases, loading, filteredCase }

}


//   //update
//   function handleUpdate(id) {
//     update(ref(db, `/${id}`), {
//       cajas,
//       id: id,
//     });
//   }

//delete
//   function handleDelete(id) {
//     remove(ref(db, `/${id}`));
//   }