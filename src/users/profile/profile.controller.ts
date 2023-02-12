import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    ParseIntPipe,
    Delete,
    Patch,
  } from '@nestjs/common';

  import { CreateProfileDto } from '../dto/create-profile.dto';
  import { ProfileService } from '../profile/profile.service'

@Controller('users')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Post(':id/profile')
    createProfile(@Param('id', ParseIntPipe) id: number,
    @Body() profile: CreateProfileDto){
        return this.profileService.createProfile(id, profile)
    }
}
