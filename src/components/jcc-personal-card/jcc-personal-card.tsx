import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'jcc-personal-card',
  styleUrl: 'jcc-personal-card.css',
  shadow: true,
})
export class JccPersonalCard {

  @Prop() firstName: string = "";
  @Prop() lastName: string = "";
  @Prop() resume: string = "";
  @Prop() photo: string = "";
  @Prop() role: string = "Ing. Sistemas Computacionales";

  render() {
    return(
      <div class="b-personal-card-box">
        <div class="b-personal-card">
          <div class="b-personal-card__content">
            <div class="b-personal-card__photo-container">
              <img 
                class="b-personal-card__photo" 
                src={this.photo} alt={this.firstName}/>
            </div>
            <h2 class="b-personal-card__full-name"              
            >
              {this.firstName} {this.lastName}
            </h2>
            <h3>
              {this.role}
            </h3>
            <div class="b-personal-card__resume">
              {this.resume}
            </div>
          </div>
        </div>
      </div>
    )
  }

}
