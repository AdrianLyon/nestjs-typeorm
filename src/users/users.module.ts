import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { Profile } from './profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Profile])],
  controllers: [UsersController, ProfileController],
  providers: [UsersService, ProfileService],
  exports: [UsersService],
})
export class UsersModule {}
