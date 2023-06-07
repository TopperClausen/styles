import "reflect-metadata"
import { DataSource } from "typeorm"
import { Style } from "./entity/Style"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "styles",
    synchronize: true,
    logging: false,
    entities: [Style],
    migrations: [],
    subscribers: [],
})
