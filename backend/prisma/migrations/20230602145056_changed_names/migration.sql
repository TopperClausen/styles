/*
  Warnings:

  - You are about to drop the column `styleVariantsId` on the `VariantSizes` table. All the data in the column will be lost.
  - You are about to drop the column `stylesId` on the `StyleVariants` table. All the data in the column will be lost.
  - Made the column `description` on table `Styles` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VariantSizes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "size" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "styleVariantId" INTEGER,
    CONSTRAINT "VariantSizes_styleVariantId_fkey" FOREIGN KEY ("styleVariantId") REFERENCES "StyleVariants" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_VariantSizes" ("id", "size", "stock") SELECT "id", "size", "stock" FROM "VariantSizes";
DROP TABLE "VariantSizes";
ALTER TABLE "new_VariantSizes" RENAME TO "VariantSizes";
CREATE TABLE "new_Styles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Styles" ("description", "id", "name") SELECT "description", "id", "name" FROM "Styles";
DROP TABLE "Styles";
ALTER TABLE "new_Styles" RENAME TO "Styles";
CREATE TABLE "new_StyleVariants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "color" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "styleId" INTEGER,
    CONSTRAINT "StyleVariants_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Styles" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_StyleVariants" ("color", "id", "price") SELECT "color", "id", "price" FROM "StyleVariants";
DROP TABLE "StyleVariants";
ALTER TABLE "new_StyleVariants" RENAME TO "StyleVariants";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
