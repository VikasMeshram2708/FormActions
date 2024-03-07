import { MongoClient } from "mongodb";
import { WithId } from "mongodb";

const { NEXT_PUBLIC_DB_URI, NEXT_PUBLIC_DB_NAME , NEXT_PUBLIC_DB_COLLECTION} = process.env;

const client = new MongoClient(NEXT_PUBLIC_DB_URI!);

export const db = client.db(NEXT_PUBLIC_DB_NAME!);

export const TodosCollection = db.collection(NEXT_PUBLIC_DB_COLLECTION!)
