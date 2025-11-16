CREATE TABLE `short_urls` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `short_id` varchar(20) NOT NULL,
  `original_url` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `short_id` (`short_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;