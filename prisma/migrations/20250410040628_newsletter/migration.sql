-- CreateTable
CREATE TABLE "NewsLetter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsLetter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetter_email_key" ON "NewsLetter"("email");
