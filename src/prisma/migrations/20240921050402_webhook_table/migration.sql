-- CreateTable
CREATE TABLE "webhook" (
    "id" SERIAL NOT NULL,
    "guestId" INTEGER,
    "templateName" TEXT,
    "waId" TEXT,
    "recipientId" TEXT,
    "status" TEXT,
    "lastUpdateStatus" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "webhook_id_key" ON "webhook"("id");
