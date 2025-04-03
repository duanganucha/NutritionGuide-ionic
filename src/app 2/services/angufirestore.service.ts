import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  docData,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AngufirestoreService {
  constructor(private db: Firestore) {}

  async create(collectionName: string, data: any): Promise<string> {
    const ref = collection(this.db, collectionName);
    const docRef = await addDoc(ref, data);
    return docRef.id;
  }

  createById(collectionName: string, data: any, id: string) {
    const collectionRef = collection(this.db, collectionName);
    const docRef = doc(collectionRef, id);
    return setDoc(docRef, data);
  }

  read<T>(collectionName: string, documentId: string) {
    const ref = doc(this.db, collectionName, documentId);
    return docData(ref, { idField: 'id' }) as any; // Removed Observable and DocumentData import, using any for simplicity
  }

  update<T>(collectionName: string, documentId: string, data: Partial<T>) {
    const ref = doc(this.db, collectionName, documentId);
    return updateDoc(ref, data);
  }

  delete(collectionName: string, documentId: string) {
    const ref = doc(this.db, collectionName, documentId);
    return deleteDoc(ref);
  }

  list(collectionName: string) {
    const collectionRef = collection(this.db, collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as any;
  }

  listFilter(collectionName: string, telphone: string) {
    console.log(telphone);
    const collectionRef = collection(this.db, collectionName);

    if (telphone) {
      const q = query(
        collectionRef,
        where('userData.telPhone', '==', telphone)
      );
      return collectionData(q, { idField: 'id' });
    }

    return collectionData(collectionRef, { idField: 'id' });
  }
}
