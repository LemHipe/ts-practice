import type { FastifySessionOptions } from "@fastify/session";
import dotenv from "dotenv";
import { realDir } from "./dir";

dotenv.config({ path: realDir.environment });

type ServerConfig = {
    port: number;
    host: string;
};

const serverConfig: ServerConfig = {
    port: Number(process.env.SHARED_CONFIG_SERVER_PORT) || 3000,
    host: process.env.SHARED_CONFIG_SERVER_HOST || "0.0.0.0",
};

const sessionConfig: FastifySessionOptions = {
    secret:
        process.env.TS_CONFIG_SESSION_SECRET ||
        "this_is_a_super_secret_key_32_chars_min!",
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // in ms (1 day)
    },
    saveUninitialized: false,
};

const jwtConfig = {
    secret: process.env.TS_CONFIG_JWT_SECRET || "this_is_a_super_secret_key_32_chars_min!"
};

// const awsConfig = {
//     access_key: process.env.SHARED_AWS_ACCESS_KEY_ID || "",
//     secret_key: process.env.SHARED_AWS_SECRET_ACCESS_KEY || "",
//     region: process.env.SHARED_AWS_REGION || "ap-northeast-1"
// }

export { jwtConfig, serverConfig, sessionConfig, type ServerConfig };

