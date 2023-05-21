/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../api/trpc";

export const personalInformationRouter = createTRPCRouter({
  createLocation: protectedProcedure.input(
    z.object({
      name: z.string(),
      address: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
      total_spaces: z.string(),
      subscription_type_id: z.string(),
      parcs_type_id: z.string()
    })
  )
    .mutation(async ({ ctx, input }) => {
      console.log(input)
      try {
        await ctx.prisma.locations.create({
          data: {
            name: input.name,
            address: input.address,
            city: input.city,
            state: input.state,
            zip: input.zip,
            total_spaces: parseInt(input.total_spaces),
            subscription_type_id: parseInt(input.subscription_type_id),
            parcs_type_id: parseInt(input.parcs_type_id),
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
  getSubscriptionTypes: protectedProcedure.query(async ({ ctx }) => {
    const subscription_types = await ctx.prisma.subscription_types.findMany();
    return subscription_types;
  }),
  getParcsTypes: protectedProcedure.query(async ({ ctx }) => {
    const parcs_types = await ctx.prisma.parcs_types.findMany();
    return parcs_types;
  }),

});