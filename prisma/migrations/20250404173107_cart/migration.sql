/*
  Warnings:

  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `selectedColorName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "quantity",
DROP COLUMN "selectedColorName",
DROP COLUMN "size";

-- CreateTable
CREATE TABLE "ProductCartDetailes" (
    "id" SERIAL NOT NULL,
    "selectedColorName" TEXT,
    "size" TEXT[],
    "quantity" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductCartDetailes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductCartDetailes" ADD CONSTRAINT "ProductCartDetailes_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCartDetailes" ADD CONSTRAINT "ProductCartDetailes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
