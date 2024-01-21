-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "linkedin" TEXT,
    "twitter" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
