import { procedure } from "@/server/trpc";
import { z } from 'zod';

export const createFeedback = procedure
  .input(
    z.object({
      type: z.string(),
      content: z.string(),
    })
  ) 
  .mutation(async ({ ctx, input}) => {
      await ctx.prisma.feedBack.create({
        data: {
          type: input.type,
          content: input.content,
        }
      })

      return {
        success: true
      }
    })