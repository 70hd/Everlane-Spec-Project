-- DropForeignKey
ALTER TABLE "ProductCartDetailes" DROP CONSTRAINT "ProductCartDetailes_productId_fkey";

-- AlterTable
ALTER TABLE "ProductCartDetailes" ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "size" SET DATA TYPE TEXT,
ALTER COLUMN "quantity" DROP NOT NULL,
ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductCartDetailes" ADD CONSTRAINT "ProductCartDetailes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
