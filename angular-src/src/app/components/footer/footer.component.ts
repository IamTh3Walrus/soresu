import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private LinkedinImage = require("./assets/linkedin.png");
  private GithubImage = require("./assets/octocat.jpg");

  constructor() { }

  ngOnInit() {
  }

}
