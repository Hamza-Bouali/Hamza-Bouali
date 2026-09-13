import { jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const portfolioContent = pgTable('portfolio_content', {
  id: uuid('id').defaultRandom().primaryKey(),
  contentKey: text('content_key').notNull().unique(),
  content: jsonb('content').notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})
