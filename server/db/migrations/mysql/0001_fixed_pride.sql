CREATE TABLE `sites` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`type` enum('production','staging') DEFAULT 'production',
	`token` text NOT NULL,
	`url` text NOT NULL,
	`timezone` text,
	`data` json,
	CONSTRAINT `sites_id` PRIMARY KEY(`id`)
);
