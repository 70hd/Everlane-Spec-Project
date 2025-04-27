/*
  Warnings:

  - You are about to drop the column `accountId` on the `Heart` table. All the data in the column will be lost.
  - Added the required column `account_id` to the `Heart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Heart" DROP CONSTRAINT "Heart_accountId_fkey";

-- AlterTable
ALTER TABLE "Heart" DROP COLUMN "accountId",
ADD COLUMN     "account_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Heart_account_id_idx" ON "Heart"("account_id");

-- CreateIndex
CREATE INDEX "Product_status_idx" ON "Product"("status");

-- AddForeignKey
ALTER TABLE "Heart" ADD CONSTRAINT "Heart_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
