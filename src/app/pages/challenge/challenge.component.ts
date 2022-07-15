import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent {

  root:any = null;
  leftBranch:any = [];
  rightBranch:any = [];

  getTree() {
    if ((document.getElementById('numbers') as HTMLInputElement).value) {
      const numbers = (document.getElementById('numbers') as HTMLInputElement).value.split(',').map(x => parseInt(x, 10));

      this.root = Math.max.apply(null, numbers);
      const rootPosition = numbers.indexOf(this.root);
      this.leftBranch = numbers.slice(0, rootPosition).sort((a, b) => a - b).reverse();
      this.rightBranch = numbers.slice(rootPosition + 1).sort((a, b) => a - b).reverse();
    }
  }

}
