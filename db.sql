CREATE TABLE hotdogs (
id SERIAL PRIMARY KEY,
hotdogname VARCHAR(100) NOT NULL,
description VARCHAR(350) NOT NULL,
price INT NOT NULL,
image INT NOT NULL REFERENCES images (id)
);

SELECT * FROM hotdogs;

INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', 'images/hotdog-42015_640.png');

DROP TABLE hotdogs;

CREATE TABLE images (
id SERIAL PRIMARY KEY,
image VARCHAR(100) NOT NULL 
);

SELECT * FROM images;

INSERT INTO images (image) VALUES ('images/bun-2413144_640.png');
INSERT INTO images (image) VALUES ('images/hotdog-42015_640.png');
INSERT INTO images (image) VALUES ('images/hotdog-147521_640.png');
INSERT INTO images (image) VALUES ('images/hotdog-155647_640.png');
INSERT INTO images (image) VALUES ('images/hotdog-156477_640.png');
INSERT INTO images (image) VALUES ('images/hot-dog-575813_640.png');
INSERT INTO images (image) VALUES ('images/hot-dog-576379_640.png');
INSERT INTO images (image) VALUES ('images/hot-dog-700113_640.jpg');
INSERT INTO images (image) VALUES ('images/hotdog-3249059_640.png');

INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 3, '1');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 4, '2');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 3, '3');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 5, '4');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 4, '5');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 5, '6');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 3, '7');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 4, '8');
INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ('hotdog', 'Grilled link-sausage sandwich where the sausage is served in the slit of a partially sliced bun. It might also include mustard, ketchup, mayonnaise, relish, and cheese sauce, and common garnishes include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw, and olives', 3, '9');

INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', );

DELETE FROM hotdogs WHERE 





