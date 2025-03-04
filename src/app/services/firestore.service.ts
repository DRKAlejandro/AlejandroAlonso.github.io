import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore = inject(Firestore);

  async getData<T>(collectionName: string): Promise<T[]> {
    const collectionRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));
  }

  async getDocumentById<T>(collectionName: string, id: string): Promise<T> {
    const docRef = doc(this.firestore, collectionName, id);
    const docSnapshot = await getDoc(docRef);
    
    if (!docSnapshot.exists()) {
      console.error(`Document with ID ${id} does not exist in collection ${collectionName}`);
      return undefined as unknown as T;
    }
    
    return { id: docSnapshot.id, ...docSnapshot.data() } as T;
  }
  
  async getDocumentsByIds<T>(collectionName: string, ids: string[]): Promise<T[]> {
    const documents: T[] = [];
    for (const id of ids) {
      const docRef = doc(this.firestore, collectionName, id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        documents.push({ id: docSnapshot.id, ...docSnapshot.data() } as T);
      } else {
        console.error(`Document with ID ${id} does not exist in collection ${collectionName}`);
      }
    }
    return documents;
  }
}
