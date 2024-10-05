import { Component } from "@angular/core";

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter = 0;

  private count(num: number) {
    this.counter += num;
  }

  increase() {this.count(1)}
  decrease() {this.count(-1)}
  reset() {this.count(-this.counter)}
}
