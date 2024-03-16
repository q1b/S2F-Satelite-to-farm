CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`username` text,
	`gmail` text,
	`image` text
);
--> statement-breakpoint
CREATE TABLE `user_session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
