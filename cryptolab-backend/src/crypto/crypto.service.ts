import { Injectable } from '@nestjs/common';
import * as WebSocket from "ws";
import { Server } from 'socket.io';

@Injectable()
export class CryptoService {

    private endpoints = {
        cryptocompare: 'wss://streamer.cryptocompare.com/v2?api_key=edca0b3663dea71bd3169cd90379ff6589575d88ccb0298dd13eef783dbafa77'
    }

    constructor() {}

    public cryptocompareSubUnsub(action: string) {

        let cryptocompareSub = {
            "action": action,
            "subs": [
                "5~CCCAGG~BTC~USD", "5~CCCAGG~BTC~GBP", "5~CCCAGG~BTC~EUR", "5~CCCAGG~BTC~JPY", "5~CCCAGG~BTC~ZAR",
                "5~CCCAGG~ETH~USD", "5~CCCAGG~ETH~GBP", "5~CCCAGG~ETH~EUR", "5~CCCAGG~ETH~JPY", "5~CCCAGG~ETH~ZAR",
                "5~CCCAGG~XRP~USD", "5~CCCAGG~XRP~GBP", "5~CCCAGG~XRP~EUR", "5~CCCAGG~XRP~JPY", "5~CCCAGG~XRP~ZAR",
                "5~CCCAGG~LTC~USD", "5~CCCAGG~LTC~GBP", "5~CCCAGG~LTC~EUR", "5~CCCAGG~LTC~JPY", "5~CCCAGG~LTC~ZAR",
                "5~CCCAGG~BCH~USD", "5~CCCAGG~BCH~GBP", "5~CCCAGG~BCH~EUR", "5~CCCAGG~BCH~JPY", "5~CCCAGG~BCH~ZAR",
                "5~CCCAGG~ETC~USD", "5~CCCAGG~ETC~GBP", "5~CCCAGG~ETC~EUR", "5~CCCAGG~ETC~JPY", "5~CCCAGG~ETC~ZAR"
            ]
        }

        return cryptocompareSub
    }

    public getEndpoint(endpoint: string) {
        return this.endpoints[endpoint]
    }

}
