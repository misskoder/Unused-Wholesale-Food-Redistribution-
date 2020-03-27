CREATE TABLE delivery_agents (
  delivery_agent_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  public_delivery_agent_id CHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  visible TINYINT(1) DEFAULT 1,
  UNIQUE(public_delivery_agent_id)
) CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE providers (
  provider_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  public_provider_id CHAR(36) NOT NULL,
  delivery_agent_id INT UNSIGNED DEFAULT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  location GEOMETRY,
  visible TINYINT(1) DEFAULT 1,
  KEY(visible),
  UNIQUE(public_provider_id),
  FOREIGN KEY (delivery_agent_id)
    REFERENCES delivery_agents(delivery_agent_id )
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE provider_products (
  provider_product_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  public_provider_product_id CHAR(36) NOT NULL,
  provider_id INT UNSIGNED NOT NULL,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0,
  notes TEXT,
  INDEX(price),
  UNIQUE(public_provider_product_id),
  FOREIGN KEY (provider_id)
    REFERENCES providers(provider_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE provider_times (
  provider_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  time_start SMALLINT UNSIGNED NOT NULL,
  time_end SMALLINT UNSIGNED NOT NULL,
  INDEX(time_start, time_end),
  FOREIGN KEY (provider_id)
    REFERENCES providers(provider_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE consumers (
  consumer_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  public_consumer_id CHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  type ENUM('individual', 'business', 'non_profit') DEFAULT 'individual',
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  location GEOMETRY,
  UNIQUE(public_consumer_id)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE delivery_agent_times (
  delivery_agent_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  time_start SMALLINT UNSIGNED NOT NULL,
  time_end SMALLINT UNSIGNED NOT NULL,
  INDEX(time_start, time_end),
  FOREIGN KEY (delivery_agent_id)
    REFERENCES delivery_agents(delivery_agent_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE delivery_tasks (
  delivery_task_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  public_delivery_task_id CHAR(36) NOT NULL,
  provider_product_id INT UNSIGNED NOT NULL,
  consumer_id INT UNSIGNED NOT NULL,
  delivery_agent_id INT UNSIGNED NOT NULL,
   status ENUM('pending_provider', 'pending_agent', 'pending', 'in_delivery', 'delivered', 'cancelled'),
  created INT UNSIGNED NOT NULL,
  updated INT UNSIGNED NOT NULL,
  FOREIGN KEY (provider_product_id)
    REFERENCES provider_products(provider_product_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (consumer_id)
    REFERENCES consumers(consumer_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (delivery_agent_id)
    REFERENCES delivery_agents(delivery_agent_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;