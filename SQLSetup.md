CREATE TABLE users (
user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
points INT,
ADMIN BOOLEAN,
profile_picture VARCHAR,
email VARCHAR,
first_name VARCHAR,
last_name VARCHAR,
jwt VARCHAR,
rssaccont_id INT
);

CREATE TABLE questions (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
user_id INT REFERENCES users (user_id) NOT NULL,
title VARCHAR,
content VARCHAR,
creation_date TIMESTAMP,
status BOOLEAN
);

CREATE TABLE answers (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
user_id INT REFERENCES users (user_id) NOT NULL,
question_id INT REFERENCES questions (id),
content VARCHAR,
creation_date TIMESTAMP
);

ALTER TABLE questions ADD accepted_answer_id INT REFERENCES answers (id);

INSERT INTO users (points, admin, profile_picture , email, first_name, last_name, jwt, rssaccont_id) VALUES
(0, true, NULL, 'jordon@jordon.com', 'jordon', 'hill', NULL, 1 ),
(0, true, NULL, 'evan@evan.com', 'evan', 'liebhauser', NULL, 2 ),
(0, true, NULL, 'ezan@ezan.com', 'ezan', 'kodjo', NULL, 3 ),
(0, false, NULL, 'yuri@yuri.com', 'yuri', 'pierre-boyer', NULL, 4 ),
(0, false, NULL, 'michel@michel.com', 'michel', 'charles', NULL, 5 );

INSERT INTO questions (user_id, title, content , creation_date , status) VALUES
(1, 'title 1', 'content 1', '01-01-2020', 'false' ),
(1, 'title 2', 'content 2', '01-01-2020', 'false' ),
(2, 'title 3', 'content 3', '01-01-2020', 'false' ),
(2, 'title 4', 'content 4', '01-01-2020', 'false' ),
(2, 'title 5', 'content 5', '01-01-2020', 'false' );

INSERT INTO answers (user_id, question_id, content , creation_date) VALUES
(3, 1, 'answer content 1', '01-02-2020'),
(3, 1, 'answer content 2', '01-02-2020'),
(4, 1, 'answer content 3', '01-02-2020'),
(4, 2, 'answer content 4', '01-02-2020'),
(5, 2, 'answer content 5', '01-02-2020');






DROP TABLE users CASCADE;
DROP TABLE questions CASCADE;
DROP TABLE answers CASCADE;

SELECT * FROM users;
SELECT * FROM questions;
SELECT * FROM answers;

GRANT SELECT, UPDATE, INSERT, DELETE ON ALL TABLES IN SCHEMA public TO node_app_role;
