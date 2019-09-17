import {
    Controller,
    Param,
    Body,
    Get,
    Res,
    Post,
    HttpStatus,
    NotFoundException,
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDTO} from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    async getUsers(@Res() res) {

        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Post('/add')
    async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {

        const newUser = await this.userService.addUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: 'User has been submitted successfully!',
            user: newUser,
        });
    }

    @Post('/update/:id')
    async editUser(@Res() res,
                   @Param('id') userId,
                   @Body() createUserDTO: CreateUserDTO) {

        const updatedUser = await this.userService.editUser(userId, createUserDTO);
        if (!updatedUser) {
            throw new NotFoundException('User does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'User has been successfully updated',
            user: updatedUser,
        });
    }

    @Get('/delete/:id')
    async deleteUser(@Res() res,
                     @Param('id') userId) {

        const deletedUser = await this.userService.deleteUser(userId);
        if (!deletedUser) {
            throw new NotFoundException('User does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted!',
            user: deletedUser,
        });
    }

}
