import { Module } from '@nestjs/common';
import { ApiService } from './services/api/api.service';
import { CryptoModule } from './crypto/crypto.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CryptoGateway } from './crypto/crypto.gateway';
import { CryptoService } from './crypto/crypto.service';

@Module({
  imports: [
    CryptoModule
  ],
  controllers: [
    AuthController
  ],
  providers: [
    ApiService, 
    AuthService, 
    CryptoGateway,
    CryptoService
  ],
})
export class AppModule {}
