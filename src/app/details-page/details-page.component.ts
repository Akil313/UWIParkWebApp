import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

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