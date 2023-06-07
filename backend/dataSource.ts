import { DataSource } from "typeorm";
import { Style } from "./src/entity/Style";

export const dataSource = new DataSource({
    type: "better-sqlite3",
    database: "./data.sqlite3",
    synchronize: true,
    logging: true,
    entities: [Style],
    subscribers: [],
    migrations: []
});