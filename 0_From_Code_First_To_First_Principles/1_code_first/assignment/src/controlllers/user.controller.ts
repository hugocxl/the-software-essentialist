import { PrismaClient, User } from '@prisma/client'

export class UserController {
  prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createUser(userData: User): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: userData,
      })

      return user
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`)
    }
  }

  async editUser(userId: User['id'], userData: Partial<User>): Promise<User> {
    try {
      const user = await this.prisma.user.update({
        where: { id: userId },
        data: userData,
      })

      return user
    } catch (error) {
      throw new Error(`Failed to edit user: ${error.message}`)
    }
  }

  async getUserByEmail(email: User['email']): Promise<User | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      })
      return user
    } catch (error) {
      throw new Error(`Failed to get user by email: ${error.message}`)
    }
  }
}
