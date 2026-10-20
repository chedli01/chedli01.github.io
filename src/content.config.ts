import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const color = z.enum(['peach', 'mint', 'lilac', 'sky']);
const link = z.object({ label: z.string(), href: z.string() });
const home = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/home' }),
  schema: z.object({
    meta: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      greeting:z.string(), name:z.string(), photo_alt:z.string(), roles_prefix:z.string(), roles:z.array(z.string()),
      headline:z.string(), intro:z.string(), proof:z.array(z.object({count:z.number(),suffix:z.string(),label:z.string(),color})),
      availability:z.string(), buttons:z.array(link)
    }),
    work:z.object({ heading:z.string(), intro:z.string(), cards:z.array(z.object({
      slug:z.string(), color, kicker:z.string(), title:z.string(), logo:z.string().optional(),
      visual:z.object({kind:z.enum(['image']),src:z.string(),alt:z.string()}), summary:z.string(),
      badges:z.array(z.string()), proof:z.array(z.string()), stack:z.array(z.string()),
      cta:z.string(),links:z.array(link).optional()
    }))}),
    looking:z.object({heading:z.string(),title:z.string(),text:z.string(),chips:z.array(z.object({label:z.string(),color}))}),
    experience:z.object({heading:z.string(),items:z.array(z.object({dates:z.string(),role:z.string(),org:z.string(),color,text:z.string(),tags:z.array(z.string())}))}),
    education:z.object({heading:z.string(),school:z.string(),degree:z.string(),dates:z.string(),details:z.string()}),
    skills:z.object({heading:z.string(),intro:z.string(),groups:z.array(z.object({name:z.string(),color,items:z.array(z.string())}))}),
    contact:z.object({heading:z.string(),title:z.string(),text:z.string(),email:z.string(),copy_label:z.string(),copied_label:z.string(),links:z.array(link)})
  })
});
const work = defineCollection({
  loader: glob({pattern:'*.mdx',base:'./src/content/work'}),
  schema:z.object({title:z.string(),subtitle:z.string(),description:z.string(),order:z.number(),color,
    facts:z.array(z.object({label:z.string(),value:z.string()})),next:z.string()})
});
const ui = defineCollection({loader:glob({pattern:'*.yaml',base:'./src/content/ui'}),schema:z.record(z.string(),z.string())});
export const collections = {home,work,ui};
