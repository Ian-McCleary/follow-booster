import { Component, OnInit } from '@angular/core';
import { Profile } from '../profiles';
import { PROFILES } from '../mock-profiles';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  userProfile = PROFILES[2];

  constructor() { }

  ngOnInit(): void {
  }

}
