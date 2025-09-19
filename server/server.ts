import Fastify from 'fastify'
import { fastifySession, } from '@fastify/session';
import { fastifyCookie } from '@fastify/cookie';
import { serverConfig, sessionConfig, jwtConfig } from '@/config'
import routeV1 from './routes/v1/route';


// * Fastify Instance
const app = Fastify({
    logger: true
})
