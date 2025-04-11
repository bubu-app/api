import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

type CreateUserRequestType = {
  name: string;
  email: string;
};

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async execute(data: CreateUserRequestType) {
    const userAlreadyExists = await this.usersRepository.findOne({
      where: { email: data.email },
    });

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = this.usersRepository.create(data);

    await this.usersRepository.save(user);

    return user;
  }
}
