/*
  Warnings:

  - You are about to drop the column `inventory` on the `ProductCartDetailes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "inventory" INTEGER NOT NULL DEFAULT 1000;

-- AlterTable
ALTER TABLE "ProductCartDetailes" DROP COLUMN "inventory";
