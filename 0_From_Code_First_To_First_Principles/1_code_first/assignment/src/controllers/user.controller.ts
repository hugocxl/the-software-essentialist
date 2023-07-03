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
    } catch (e) {
      const error = e as Prisma.PrismaClientKnownRequestError

      if (error.code === 'P2002') {
        throw new Error(
          `Failed to create user: User with the same email already exists`
        )
      }

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
    } catch (e) {
      const error = e as Prisma.PrismaClientKnownRequestError

      if (error.code === 'P2025') {
        throw new Error(`Failed to edit user: User not found`)
      }

      throw new Error(`Failed to edit user: ${error.message}`)
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      })
      return user
    } catch (e) {
      const error = e as Prisma.PrismaClientKnownRequestError

      throw new Error(`Failed to get user by email: ${error.message}`)
    }
  }
}
