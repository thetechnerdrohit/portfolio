/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { personalInformationRouter } from "../routers/personalInformation";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  basicInformation: personalInformationRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;