import {Hono} from 'hono';
import { matches } from './mock/matches';
export const app = new Hono();

app.get('/', (c) => {
    return c.json({
        succes:true,
        message:'World Cup Ticketing API'

    },200);

});

app.get("/matchs", (c) => {
    return c.json({
        success:true,
        message:'All matchs',
        data:matches
    },200);
});

app.get("/matchs/:id", (c) => {
    const idParam =c.req.param("id");
    const idNumber = parseInt(idParam);
    const match = matches.find((m) => m.id ===idNumber);

    if(!match) {
        return c.json({
            success:false,
            error:`Match ${idParam} doers not exist`
        },404);

    }
    return c.json({
        success: true,
        message: `Match ${idNumber}`,
        data: match 
    }, 200);
        

});