import { z } from 'zod';
import { procedure, router } from '../trpc';
import { getCountFeedbacks } from './querys/getCountFeedbacks';
import { createFeedback } from './mutations/createFeedback';

export const appRouter = router({
  getCountFeedbacks: getCountFeedbacks,
  createFeedback: createFeedback
});

// export type definition of API
export type AppRouter = typeof appRouter;