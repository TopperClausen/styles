-- CreateTable
CREATE TABLE "Styles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "StyleVariants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "color" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stylesId" INTEGER,
    CONSTRAINT "StyleVariants_stylesId_fkey" FOREIGN KEY ("stylesId") REFERENCES "Styles" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VariantSizes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "size" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "styleVariantsId" INTEGER,
    CONSTRAINT "VariantSizes_styleVariantsId_fkey" FOREIGN KEY ("styleVariantsId") REFERENCES "StyleVariants" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
