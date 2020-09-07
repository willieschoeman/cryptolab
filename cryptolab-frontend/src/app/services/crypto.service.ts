import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class CryptoService {

  constructor(private socket: Socket) { 
  }

  getCryptoData() {
    return this.socket.fromEvent('cryptodata');
  }

}