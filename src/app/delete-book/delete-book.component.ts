import { Component, OnInit } from '@angular/core';
import { AddBook } from '../shared/interface/addBook';
import { AddBookService } from '../shared/service/addBook/add-book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  tableColumnDate=['Id','BookName','Author','Publication','Qty','Price','Branch','Details','Action'];

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

    deleteBook(id:number){
       this._bookService.deleteBookDetails(id).subscribe({
        next:(value)=> {
          alert(`Book Deleted Successfully`);
          this.showBookDetails();
        },
        error:console.log
       })
    }

}
