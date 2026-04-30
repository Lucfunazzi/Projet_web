import {Hono} from 'hono'

export const app = new Hono();

app.get('/', (c) => {
    return c.json({
        succes:true,
        message:'World Cup Ticketing API'

    },200)
})