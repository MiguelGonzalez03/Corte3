import { registerAs } from '@nestjs/config';

export default registerAs('config', ()=>{
    return {
        DATABASE_HOST: process.env.DATABASE_HOST,
        DATABASE_PASS: process.env.DATABASE_PASS,
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_USER: process.env.DATABASE_USER
    }
})