BEGIN;

DROP TABLE IF EXISTS "pays";

CREATE TABLE "pays" (
    "country_id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" VARCHAR(50) NOT NULL,
    "iso3" VARCHAR(3) NOT NULL,
    "capitale" VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS "paysbyiso2";

CREATE TABLE "paysbyiso2" (
    "nom" VARCHAR(50) NOT NULL,
    "iso2" VARCHAR(2) NOT NULL
);

DROP TABLE IF EXISTS "code_requete";

CREATE TABLE "code_requete" (
    "iso2" VARCHAR(2) NOT NULL
);

COMMIT;