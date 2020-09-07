import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SearchPipe } from '../pipes/search.pipe';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isLoading: boolean
  public isCrypto: boolean
  public selected: string
  public searchString: string
  private userId: string
  public users: number
  public cryptoDataFrom: any
  public cryptoDataTo: any
  public coins: any
  public currencies: any
  public tableData: any
  public message: string
  public messages: string[]

  constructor(private router: Router,
    public searchPipe: SearchPipe,
    private cryptoService: CryptoService
  ) {
    this.isLoading = true
    this.messages = []
    this.message = ''
    this.users = 0
    this.cryptoDataFrom = []
    this.cryptoDataTo = []
    this.coins = []
    this.currencies = []
    this.tableData = {}
    this.isCrypto = false
    this.selected = 'Currency'
  }

  ngOnInit() {
    this.isLoading = true
    this.userId = sessionStorage.getItem("XUSERID")
    this.cryptoDataFrom = []
    this.cryptoDataTo = []
    this.coins = []
    this.currencies = []
    this.tableData = {}
    this.isCrypto = false
    this.selected = 'Currency'
    this.getData()

  }

  getData() {

    this.cryptoService.getCryptoData().subscribe((cryptoData: any) => {

      let fromSymbol = cryptoData.FROMSYMBOL
      let toSymbol = cryptoData.TOSYMBOL

      // Coins
      let coinIndex = this.coins.findIndex(x => (x === fromSymbol))

      if (coinIndex === -1) {
        this.coins.push(fromSymbol)
      }

      // Exchange
      let currencyIndex = this.currencies.findIndex(x => (x === toSymbol))

      if (currencyIndex === -1) {
        this.currencies.push(toSymbol)
      }

      // From Coin
      let fromIndex = this.cryptoDataFrom.findIndex(x => (x?.FROMSYMBOL === fromSymbol))

      if (fromIndex === -1) {

        let entry = {
          FROMSYMBOL: fromSymbol,
          items: [cryptoData]
        }

        this.cryptoDataFrom.push(entry)
      } else {

        let toIndex = this.cryptoDataFrom[fromIndex].items.findIndex(x => (x?.TOSYMBOL === toSymbol))

        if (toIndex === -1) {
          this.cryptoDataFrom[fromIndex].items.push(cryptoData)
        } else {
          this.cryptoDataFrom[fromIndex].items[toIndex] = cryptoData
        }
      }

      // To Currency
      let toIndex = this.cryptoDataTo.findIndex(x => (x?.TOSYMBOL === toSymbol))

      if (toIndex === -1) {

        let entry = {
          TOSYMBOL: toSymbol,
          items: [cryptoData]
        }

        this.cryptoDataTo.push(entry)
      } else {

        let fromIndex = this.cryptoDataTo[toIndex].items.findIndex(x => (x?.FROMSYMBOL === fromSymbol))

        if (fromIndex === -1) {
          this.cryptoDataTo[toIndex].items.push(cryptoData)
        } else {
          this.cryptoDataTo[toIndex].items[fromIndex] = cryptoData
        }
      }

    });

    this.isLoading = false;
  }

  toggleCrypto() {
    this.searchString = ''
    this.isCrypto = !this.isCrypto
    
    if (this.isCrypto) {
      this.selected = 'Crypto'
    } else {
      this.selected = 'Currency'
    }
  }

}