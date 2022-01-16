const Pool = require("pg").Pool;

const pool = new Pool({
    user: "gqxzsektlofjdy",
    host: "ec2-34-230-198-12.compute-1.amazonaws.com",
    database: "dacbrmca93jao3",
    password:
        "1b6af31bba80e4c0b58308f8a930441ed16309980d66e76c723e49f370eaec74",
    port: 5432,
    ssl: { rejectUnauthorized: false },
});

module.exports = pool;
