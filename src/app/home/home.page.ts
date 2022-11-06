import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  handleRefresh(e) {
    setTimeout(() => {
      this.GetData();
      e.target.complete();
    }, 2000);
  };

  public allData:any = [];
  constructor() {
    this.GetData();
  }

  async GetData(){
    const res:any = await axios.get('http://mobileprogramming123.000webhostapp.com/get_data.php');
    this.allData = res.data.result;
  }


}