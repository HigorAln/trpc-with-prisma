import { procedure } from "@/server/trpc";

export const getCountFeedbacks = procedure
  .query(async ({ input, ctx }) => {
    const data = await ctx.prisma.feedBack.findMany();
    
    return {
      feedbacks: data
    };
  })