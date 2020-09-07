import { Module } from '@nestjs/common';
import { CryptoGateway } from './crypto.gateway';
import { CryptoService } from './crypto.service';

@Module({
  imports: [
  ],
  controllers: [
  ],
  providers: [ 
    CryptoGateway, 
    CryptoService
  ],
})
export class CryptoModule {}
