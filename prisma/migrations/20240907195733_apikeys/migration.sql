-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- CreateTable
CREATE TABLE "api_keys" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" VARCHAR(250),

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);
