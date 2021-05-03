import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'jcc-button',
  styleUrl: 'jcc-button.css',
  shadow: true,
})
export class JccButton {

  @Prop() text: string = 'Button';
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {
          this.text
        }
      </button>
    );
  }

}
