/*
  Warnings:

  - You are about to drop the `_HeartToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_HeartToProduct" DROP CONSTRAINT "_HeartToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_HeartToProduct" DROP CONSTRAINT "_HeartToProduct_B_fkey";

-- DropTable
DROP TABLE "_HeartToProduct";

-- CreateTable
CREATE TABLE "_HeartProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_HeartProducts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_HeartProducts_B_index" ON "_HeartProducts"("B");

-- AddForeignKey
ALTER TABLE "_HeartProducts" ADD CONSTRAINT "_HeartProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Heart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeartProducts" ADD CONSTRAINT "_HeartProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
