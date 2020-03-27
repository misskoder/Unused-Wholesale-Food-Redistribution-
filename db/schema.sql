CREATE TABLE products (
  product_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
) CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE users (
  user_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_private_id CHAR(36) NOT NULL,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  location GEOMETRY,
  type ENUM('buyer', 'seller') DEFAULT 'buyer'
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE seller_products (
  seller_product_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0,
  will_donate TINYINT(1) UNSIGNED NOT NULL,
  quantity INT UNSIGNED NOT NULL,
  notes TEXT,
  INDEX(price),
  INDEX(will_donate),
  FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (product_id)
    REFERENCES products(product_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;
