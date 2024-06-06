import { Db, MongoClient } from "mongodb";

export class Database {
  private db?: Db;
  private static instance: Database;

  private constructor() {}

  async init(uriConnet: string) {
    const client = new MongoClient(uriConnet);
    await client.connect();
    this.db = client.db("zahir_website");
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  getDb() {
    if (!this.db) {
      throw new Error("DB is not init");
    }

    return this.db;
  }
}
