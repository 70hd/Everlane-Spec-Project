/*
  Warnings:

  - You are about to drop the column `heart` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `hearted` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "heart",
ADD COLUMN     "permission" "Role" DEFAULT 'USER';

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "likeNum" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "hearted";

-- CreateTable
CREATE TABLE "Heart" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Heart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Heart" ADD CONSTRAINT "Heart_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Heart" ADD CONSTRAINT "Heart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
