/*
  Warnings:

  - Added the required column `fto` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "fto" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("bio", "email", "nome") SELECT "bio", "email", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
