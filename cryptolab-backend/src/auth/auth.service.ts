import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    // Hardcoded for demo
    private user = {
        name: "John Moodie",
        username: "admin@domain.com",
        password: "asdf@1234",
        token: "",
    }

    // Hardcoded for demo
    private token = "dah340234n2k3429hd283dh923r89h82fh298r9823"
 
    constructor() {
    }

    // This should actually go to a database - hardcoded for demo
    async authenticate(body: any) {

        if ((this.user?.password === body.password) && (this.user?.username === body.username)) {

            delete this.user?.password
            this.user.token = this.token

            return {
                success: true,
                message: 'Successfully logged in!',
                response: {
                    user: this.user
                }
            }

        } else {
            return {
                success: false,
                message: 'Incorrect user details!'
            }
        }

    }
}