import { defineCollection, z } from 'astro:content';

const recordingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    year: z.string(),
    description: z.string(),
    cox: z.string(),
    imageSrc: z.string(),
  }),
});

export const collections = {
  recordings: recordingsCollection,
};