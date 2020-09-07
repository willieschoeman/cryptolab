import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { CryptoService } from './crypto.service'
import * as WebSocket from "ws";
import { Server } from 'socket.io';

@WebSocketGateway()
export class CryptoGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: Server;
    private cryptoWS
    users: number

    constructor(private cryptoService: CryptoService) {

        this.users = 0
        this.cryptoWS = new WebSocket(this.cryptoService.getEndpoint('cryptocompare'));

        this.cryptoWS.on("open", () => {
            this.cryptoWS.send(JSON.stringify(this.cryptoService.cryptocompareSubUnsub('SubAdd')))
        });

        this.cryptoWS.on("message", (message) => {
            
            // Type 5 data only
            if (JSON.parse(message)?.TYPE === "5" && JSON.parse(message)?.PRICE) {
                this.server.emit('cryptodata', JSON.parse(message))
            }
        });
    }

    async handleConnection(client: any) {

        // A client has connected
        this.users++

        // Notify connected clients of current users
        this.server.emit('users', this.users)

    }

    async handleDisconnect() {

        // A client has disconnected
        this.users--

        // Notify connected clients of current users
        this.server.emit('users', this.users)

    }

}