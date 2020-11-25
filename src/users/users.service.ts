import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users: User[];

    constructor() {
        this.users = [
            { id: 1, username: 'juan', password: 'juan123'},
            { id: 2, username: 'pedro', password: 'pedro123'},
            { id: 3, username: 'laura', password: 'laura123'},
        ];
    }

    findOne(username: string): Promise<User | undefined> {
        return this.users.find( u => username === u.username );
    }


}
