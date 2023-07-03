import { PrismaClient, User, Prisma } from '@prisma/client'

export class UserController {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createUser(userData: Prisma.UserCreateInput): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: userData,
      })

      return user
    } catch (error: any) {
      throw new Error(`Failed to create user: ${error.message}`)
    }
  }

  async editUser(
    userId: number,
    userData: Prisma.UserUpdateInput
  ): Promise<User> {
    try {
      const user = await this.prisma.user.update({
        where: { id: userId },
        data: userData,
      })

      return user
    } catch (error: any) {
      throw new Error(`Failed to edit user: ${error.message}`)
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      })
      return user
    } catch (error: any) {
      throw new Error(`Failed to get user by email: ${error.message}`)
    }
  }
}
