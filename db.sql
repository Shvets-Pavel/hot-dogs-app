CREATE TABLE hotdogs (
id SERIAL PRIMARY KEY,
hotdogname VARCHAR(100) NOT NULL,
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

INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '1');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '2');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '3');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '4');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '5');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '6');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '7');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '8');
INSERT INTO hotdogs (hotdogname, image) VALUES ('hotdog', '9');

