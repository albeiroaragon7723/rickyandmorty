import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-paginator',
  standalone: false,

  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input()
  public totalPages: number = 0;

  @Input()
  public currentPage: number = 0;

  @Output()
  public onNext: EventEmitter<number> = new EventEmitter();

  @Output()
  public onPrev: EventEmitter<number> = new EventEmitter();

  @Output()
  public onPage: EventEmitter<number> = new EventEmitter();



  get displayTotalPages(): number[] {


    const totalPages = Array.from({ length: this.totalPages }, (value, index) => index + 1)
      .slice(0, 5)
    return totalPages;
  }

  public onClickNext(): void {

    if(this.currentPage === this.totalPages) return;

    this.onNext.emit(this.currentPage + 1);

  }

  public onClickPage(page: number) {
    this.onPage.emit( page );
  }

  public onClickPrev(): void {

    if(this.currentPage === 1) return;

    this.onNext.emit(this.currentPage - 1);

  }


}
