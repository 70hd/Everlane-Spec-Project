-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "heart" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
