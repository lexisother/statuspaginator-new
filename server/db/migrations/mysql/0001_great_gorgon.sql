CREATE TABLE `sites` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`url` text NOT NULL,
	`type` enum('production','staging') DEFAULT 'production',
	`timezone` text,
	`data` json,
	CONSTRAINT `sites_id` PRIMARY KEY(`id`)
);
