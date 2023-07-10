CREATE TABLE weather_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(255) NOT NULL,
  temperature FLOAT NOT NULL,
  conditions VARCHAR(255) NOT NULL
);
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL
);
CREATE TABLE favorites (
  user_id INT,
  city JSON
);