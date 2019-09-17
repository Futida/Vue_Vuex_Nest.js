import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {User} from './interfaces/user.interface';
import {CreateUserDTO} from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

    async getUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async addUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = await this.userModel(createUserDTO);
        return newUser.save();
    }

    async editUser(userId, createUserDTO: CreateUserDTO): Promise<User> {
        return await this.userModel.findByIdAndUpdate(userId, createUserDTO, {new: true});
    }

    async deleteUser(userId): Promise<any> {
        return await this.userModel.findByIdAndRemove(userId);
    }
}
