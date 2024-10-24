import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // constructor( private investService : InvestmentService ) { }
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData;
  // }
  
  // Both ways is correct
  results = computed(() => this.investmentService.resultsData());
  // results = this.investmentService.resultsData.asReadonly();
}
