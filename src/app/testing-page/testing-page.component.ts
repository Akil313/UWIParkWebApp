import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent implements OnInit {

  lots: any;
  items: any;

  constructor(private db: AngularFireDatabase, private fs: AngularFirestore) {
    this.items = fs.collection('parking_lots').valueChanges()
    console.log(this.items)

    db.list('/parking_lots').valueChanges()
      .subscribe(lots => {
        this.lots = lots;
        console.log(this.lots);
      });
  }

  ngOnInit() {
  }


}
