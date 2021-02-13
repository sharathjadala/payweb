
/**
* Index Component
* index module routing output
* @package IndexComponent
* @subpackage app\index\IndexComponent
* @author SEPA Cyper Technologies, Sayyad M.
*/

import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  apploader: boolean = false;
  constructor(private routerNavigate: Router, private route: ActivatedRoute) { }
  ngOnInit() {
  }
}
