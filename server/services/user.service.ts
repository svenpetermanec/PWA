import { User, PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export class UserService {
  async register(userDTO: User) {
    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(userDTO.password, salt);

    const user = await prisma.user.create({
      data: {
        username: userDTO.username,
        password: hashedPassword,
      },
    });
    return { username: user.username, isAdmin: user.isAdmin };
  }

  async login({ username, password }: { username: string; password: string }) {
    const user = await prisma.user.findFirst({
      where: { username: { equals: username } },
    });

    if (!user) return { status: 404, message: "Account doesn't exist" };

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return { status: 401, message: 'Incorrect password' };

    return { status: 200, message: user };
  }
}
