import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/characters.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-characters-list',
  standalone: false,

  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent implements OnInit {

  public characters: Character[] = [];
  public currentPage: number = 1;
  public totalPages: number = 0;
  public loading: boolean = false;

  public constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCharacters()
  }

  private getCharacters(): void {

    this.loading = true;

    this.activatedRoute.queryParamMap.pipe(
      switchMap(query => {
        return this.charactersService.getCharacters(Number(query.get('page') ?? 1))})
    )
      .subscribe({
        next: (value) => {
          this.characters = value;
          this.currentPage = this.charactersService.currentPage;
          this.totalPages = this.charactersService.totalPages;
        },
        complete: () => {
          this.loading = false;
        },
      })
  }

  private navigateToPage(page: number) {
    const queryParams = { page }
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      })
  }

  public onNext(page: number): void {
    this.navigateToPage(page)
  }

  public onPage(page: number): void {
    this.navigateToPage(page)
  }

  public onPrev(page: number): void {
    this.navigateToPage( page )
  }

}
