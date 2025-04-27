/*
  Warnings:

  - You are about to drop the column `productId` on the `Heart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Heart" DROP CONSTRAINT "Heart_productId_fkey";

-- AlterTable
ALTER TABLE "Heart" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_HeartToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_HeartToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_HeartToProduct_B_index" ON "_HeartToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- AddForeignKey
ALTER TABLE "_HeartToProduct" ADD CONSTRAINT "_HeartToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Heart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeartToProduct" ADD CONSTRAINT "_HeartToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
