import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../shared/service/addBook/add-book.service';
import { AddBook } from '../shared/interface/addBook';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent  implements OnInit {

  tableColumnDate=['Author','Branch','Details','IsbnNumber','Name','Price','Publication','Qty'];

  bookDetailsData:Array<AddBook>=[];

  constructor (private _bookService:AddBookService){
  }

  ngOnInit(): void {
    this.showBookDetails();
  }

  showBookDetails(){
    this._bookService.getBookDetails().subscribe({
      next :(value)=> {
          console.log(value);
          this.bookDetailsData=value;
      },
    })

  }

}
