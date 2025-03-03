import { sql } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").default(sql`NULL`),
  link: text("link"),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});
export const blogsTable = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  link: text("link"),
  tags: text("tags")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertTable = typeof projectsTable.$inferInsert;
export type SelectTable = typeof projectsTable.$inferSelect;
export type InsertBlogs = typeof blogsTable.$inferInsert;
export type SelectBlogs = typeof blogsTable.$inferSelect;
