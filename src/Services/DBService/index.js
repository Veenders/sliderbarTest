import * as firebase from 'firebase';
import config from '../../.config';

let DB;

export default class DBService{
    static initDabatase(){
          firebase.initializeApp(config);
          DB = firebase.firestore();
    }
    static async setDocumentWithId(collectionName, document, id){
        let success = true;
        
        try {
          await DB.collection(collectionName).doc(id).set(document, { merge: true });
        } catch (error) {
          success = false;
                console.log("​DatabaseApi -> updateDocument -> error", error)
        }
        return success;
    }
    static getRealtimeDocument(collectionName, docName, callback){
        return DB.collection(collectionName).doc(docName)
          .onSnapshot((doc) => callback(doc.data()));
    }
}