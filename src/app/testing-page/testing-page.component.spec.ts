import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPageComponent } from './testing-page.component';
import {MaterialModule} from '../material.module';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import {environment} from '../../environments/environment';
import {AngularFireModule} from '@angular/fire';

describe('TestingPageComponent', () => {
  let component: TestingPageComponent;
  let fixture: ComponentFixture<TestingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      declarations: [ TestingPageComponent ],
      providers: [
        AngularFireDatabase,
        AngularFirestore
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
