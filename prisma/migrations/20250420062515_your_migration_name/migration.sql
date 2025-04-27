-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('WOMAN', 'MEN');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "gender" "Gender" DEFAULT 'MEN';
