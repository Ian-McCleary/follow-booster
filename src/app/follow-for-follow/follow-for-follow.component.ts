import { Component, OnInit } from '@angular/core';
import { Profile } from '../profiles';
import { PROFILES } from '../mock-profiles'

@Component({
  selector: 'app-follow-for-follow',
  templateUrl: './follow-for-follow.component.html',
  styleUrls: ['./follow-for-follow.component.css']
})
export class FollowForFollowComponent implements OnInit {

  profiles = PROFILES;

  constructor() { }

  ngOnInit(): void {
  }

}
