import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // Ensure global object has prisma property
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }

  // Type assertion for global.prisma
  prisma = global.prisma as PrismaClient
}

export default prisma
