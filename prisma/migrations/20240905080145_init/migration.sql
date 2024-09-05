-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "screen_size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "hardisk" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "special_features" TEXT NOT NULL,
    "graphics" TEXT NOT NULL,
    "graphics_coprocessor" TEXT NOT NULL,
    "cpu_speed" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
