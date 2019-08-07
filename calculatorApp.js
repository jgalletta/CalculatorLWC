import { LightningElement, track } from "lwc";
export default class CalculatorApp extends LightningElement {
  @track total = "";
  dispone() {
    this.total = this.total + "1";
  }
  disptwo() {
    this.total = this.total + "2";
  }
  dispthree() {
    this.total = this.total + "3";
  }
  dispfour() {
    this.total = this.total + "4";
  }
  dispfive() {
    this.total = this.total + "5";
  }
  dispsix() {
    this.total = this.total + "6";
  }
  dispseven() {
    this.total = this.total + "7";
  }
  dispeight() {
    this.total = this.total + "8";
  }
  dispnine() {
    this.total = this.total + "9";
  }
  dispzero() {
    this.total = this.total + "0";
  }
  clear() {
    this.total = "";
  }
  add() {
    this.total = this.total + " + ";
  }
  subtract() {
    this.total = this.total + " - ";
  }
  multiply() {
    this.total = this.total + " X ";
  }
  divide() {
    this.total = this.total + " / ";
  }

  equals() {
    var str = this.total;
    var a = str.indexOf("+");
    var s = str.indexOf("-");
    var m = str.indexOf("X");
    var d = str.indexOf("/");
    var one;
    var two;
    if (a !== -1) {
      one = parseInt(this.total.substring(0, a - 1), 10);
      two = parseInt(this.total.substring(a + 2), 10);
      this.total = one + two;
    }
    if (s !== -1) {
      one = parseInt(this.total.substring(0, s - 1), 10);
      two = parseInt(this.total.substring(s + 2), 10);
      this.total = one - two;
    }
    if (m !== -1) {
      one = parseInt(this.total.substring(0, m - 1), 10);
      two = parseInt(this.total.substring(m + 2), 10);
      this.total = one * two;
    }
    if (d !== -1) {
      one = parseInt(this.total.substring(0, d - 1), 10);
      two = parseInt(this.total.substring(d + 2), 10);
      this.total = one / two;
    }
  }
}
