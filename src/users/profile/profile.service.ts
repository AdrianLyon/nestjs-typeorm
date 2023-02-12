import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { Profile } from '../profile.entity';
import { User } from '../user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>
  ) {}

  async createProfile(id: number, profile: CreateProfileDto) {
    const userFound = await this.userRepository.findOne({
      where: { id },
    });

    if(!userFound){
        return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    const newProfile = this.profileRepository.create(profile)

    const saveProfile = await this.profileRepository.save(newProfile)

    userFound.profile = saveProfile
    
    return this.userRepository.save(userFound)
  }
}
