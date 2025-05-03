import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users') // Base route for all user-related endpoints
export class UsersController {
  @Get() // HTTP GET request to list all users
  getAllUsers() {
    // return all users
  }

  @Post() // HTTP POST request to create a new user
  createUser(@Body() userDto: { name: string; email: string }) {
    // create a user
  }

  @Put(':id') // HTTP PUT request to update a user by ID
  updateUser(
    @Param('id') id: string,
    @Body() userDto: { name: string; email: string },
  ) {
    // update a user
  }

  @Delete(':id') // HTTP DELETE request to delete a user by ID
  deleteUser(@Param('id') id: string) {
    // delete a user
  }
}
