import { app } from "./app";

export default {
    port: Bun.env.PORT || 3000,
    fetch: app.fetch
};