import { relations, type InferSelectModel, eq } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sessionTable } from './session';
import { genId } from '../helpers/generate-id';
import { createInsertSchema } from 'drizzle-zod';

export const cropFieldTable =sqliteTable('crop_field', {
	id: genId(),
	currentCrop: text('current_crop'),
	// address
	lag: text('lag'),
	lat: text('lat'),
	userId: text('user_id').notNull().references(() => userTable.id, { onDelete: 'cascade' }),
})

export const cropFieldsRelations = relations(cropFieldTable, ({ many, one }) => ({
	cropField: one(userTable, {
		fields: [cropFieldTable.userId],
		references: [userTable.id]
	})
}));

export const userTable = sqliteTable('user', {
	id: genId(),
	name: text('name'),
	username: text('username').unique(),
	gmail: text('gmail'),
	image: text('image'),
	password: text('password'),
	// metadata
});

export type User = InferSelectModel<typeof userTable>;
// Schema for inserting a user - can be used to validate API requests
export const createUserSchema = createInsertSchema(userTable);
export type CreateUserSchema = typeof createUserSchema;

export const usersRelations = relations(userTable, ({ many, one }) => ({
	sessions: many(sessionTable),
	cropFields: many(cropFieldTable),
}));
