// import { Db, MongoClient } from "mongodb";


// export class MongoDbConfig {
//   private uri: string
//   private singleton?: Db

//   constructor() {
//     this.uri = process.env.MONGOURI
//   }


//   async connect(): Promise<Db> {
//     if (this.singleton) return this.singleton;

//     const client = new MongoClient(this.uri);
//     await client.connect();

//     this.singleton = client.db('zahir_website');

//     return this.singleton;
//   }

//   async testConnect(): Promise<void> {
//     const db = await this.connect();
//     await db.command({ ping: 1 })
//   }
// }


// export {
//   MongoClient
// }