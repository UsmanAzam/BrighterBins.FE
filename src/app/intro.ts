import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <h1>Brighter Bins</h1>
    <p>
      We produce <b><i>cost-effective</i></b> smart sensors for municipal and
      commercial waste pickup.
    </p>
    <p>
      Our <b><i>smart sensors</i></b> prevent overflowing bins, keeping cities
      clean.
    </p>

    <p>
      Our <b><i>platform</i></b> collects data from the sensors enabling route
      optimization and prediction for waste pickup. ​
    </p>

    This means
    <ul>
      <li>less heavy traffic</li>
      <li>less CO2</li>
      <li>emissions greener cities. ​</li>
    </ul>

    <p>Our system cuts up to 40% of costs on waste collections.</p>

    <b>We made it easy for you. Calculate your cost savings right now.</b>
  `,
})
export class IntroComponent {
  constructor() {}
}
