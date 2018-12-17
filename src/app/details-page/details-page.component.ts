import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  lots: any;
  items: any;
  CurrentLot = {
    name: "No CarPark",
    parking_spaces: 0,
    taken_spaces: 0
  };
  percent: number;

  constructor(private db: AngularFireDatabase, private fs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit() {
    let lot = this.route.snapshot.paramMap.get('lot');
    console.log(lot)

    let userDoc = this.fs.firestore.collection(`parking_lots`);
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
        if (lot.localeCompare(doc.data().name) == 0){
          this.CurrentLot.name = doc.data().name;
          this.CurrentLot.parking_spaces = doc.data().parking_spaces;
          this.CurrentLot.taken_spaces = doc.data().taken_spaces;
          this.percent = this.CurrentLot.taken_spaces / this.CurrentLot.parking_spaces * 100;
        }
      })
    })

    console.log(this.percent);
  }

}