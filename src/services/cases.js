import { ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase';


export async function createNewCase(nombre, precio, objetos) {
    const uuid = uuidv4();
    set(ref(db, `/${uuid}`), {
        id: uuid,
        nombre,
        precio,
        objetos
    });
}