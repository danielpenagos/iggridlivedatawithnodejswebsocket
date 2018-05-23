import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  stockQuote: number;
  sub: Subscription;
  columns: number;
  rows: number;
  selectedTicker: string;

  constructor(private dataService: AppService) { }

  ngOnInit() {
    this.sub = this.dataService.getQuotes()
        .subscribe(quote => {
          this.stockQuote = quote;
          this.rows = 1200;
          // this.columns = Object.keys(this.localData[0]).length;
          this.columns = 130;
          console.log(this.stockQuote);
        });
  }

  handleRowSelection(args) {
    
          console.log(args.cell.row.rowData.Ticker);
          this.selectedTicker = args.cell.row.rowData.Ticker;
      }
    

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
