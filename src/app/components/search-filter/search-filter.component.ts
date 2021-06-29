import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  searchValue=""

  constructor() { }

  ngOnInit(): void {
  }

  emitSearchText(){
    this.newItemEvent.emit(this.searchValue);
  }

}
