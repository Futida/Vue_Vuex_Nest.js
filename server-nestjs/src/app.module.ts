import {Module, UseInterceptors} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot('mongodb://localhost:27017/local', {
                useNewUrlParser: true,
                useFindAndModify: false,
            },
        ),
        MorganModule.forRoot(),
    ],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: MorganInterceptor('dev'),
        },
    ],
})

@UseInterceptors(MorganInterceptor)
export class AppModule {
}
