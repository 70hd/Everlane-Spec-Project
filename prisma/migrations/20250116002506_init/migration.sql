-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "colorHex" TEXT NOT NULL,
    "colorName" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "size" TEXT[],
    "quantity" INTEGER NOT NULL,
    "productDetails" TEXT NOT NULL,
    "productCare" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Color" ADD CONSTRAINT "Color_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
