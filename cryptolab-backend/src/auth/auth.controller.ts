import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor (private authService: AuthService) {  
    }

    @Post('login')
    async authenticate(@Req() request: Request) {
        const query = request.body
        
        let authService = new AuthService()
        return authService.authenticate(query)
    }
}