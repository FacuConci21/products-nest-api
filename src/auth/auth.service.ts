import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService) {}

    validateUser(usName: string, pssw: string, ): Promise<any> {
        const user = this.userService.findOne(usName);
        // if (user && user.password === pssw) {
        //     const { password, ...result } = user;
        //     return result;
        // }
        return
    }

}
