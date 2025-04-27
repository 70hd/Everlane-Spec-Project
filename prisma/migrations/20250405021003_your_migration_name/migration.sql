-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "size" TEXT[] DEFAULT ARRAY['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']::TEXT[];
