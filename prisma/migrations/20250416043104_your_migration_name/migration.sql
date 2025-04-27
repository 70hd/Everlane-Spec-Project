-- AlterTable
ALTER TABLE "ProductCartDetailes" ADD COLUMN     "inventory" INTEGER NOT NULL DEFAULT 1000,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "Faq" (
    "Id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("Id")
);
