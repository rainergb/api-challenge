/*
  Warnings:

  - The primary key for the `Person` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `create_at` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `Person` table. All the data in the column will be lost.
  - The `id` column on the `Person` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `nome` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" DROP CONSTRAINT "Person_pkey",
DROP COLUMN "create_at",
DROP COLUMN "name",
DROP COLUMN "update_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Person_pkey" PRIMARY KEY ("id");
