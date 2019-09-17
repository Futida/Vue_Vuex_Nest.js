import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {users} from './schemas/users.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'User', schema: users}]),
    ],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {
}
