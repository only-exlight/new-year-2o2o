import { ICreateForm } from '@app/interfaces';

export class CreateFormModel implements ICreateForm {
  public recipient: string;
  public recipientEmail: string;
  public screen_1_sticker_1: string;
  public screen_1_sticker_2: string;
  public screen_1_sticker_3: string;
  public screen_2_sticker_1: string;
  public screen_2_sticker_2: string;
  public screen_2_sticker_3: string;
  public screen_2_sticker_4: string;
  public screen_2_text: string;
  public your_name: string;
  [field: string]: any;

  public nextState(): CreateFormModel {
    const state = new CreateFormModel();
    state.recipient = this.recipient;
    state.recipientEmail = this.recipientEmail;
    state.screen_1_sticker_1 = this.screen_1_sticker_1;
    state.screen_1_sticker_2 = this.screen_1_sticker_2;
    state.screen_1_sticker_3 = this.screen_1_sticker_3;
    state.screen_2_sticker_1 = this.screen_2_sticker_1;
    state.screen_2_sticker_2 = this.screen_2_sticker_2;
    state.screen_2_sticker_3 = this.screen_2_sticker_3;
    state.screen_2_sticker_4 = this.screen_2_sticker_4;
    state.screen_2_text = this.screen_2_text;
    state.your_name = this.your_name;
    return state;
  }

  public toJSON(): ICreateForm {
    return {
      recipient: this.recipient,
      recipientEmail: this.recipientEmail,
      screen_1_sticker_1: this.screen_1_sticker_1,
      screen_1_sticker_2: this.screen_1_sticker_2,
      screen_1_sticker_3: this.screen_1_sticker_3,
      screen_2_sticker_1: this.screen_2_sticker_1,
      screen_2_sticker_2: this.screen_2_sticker_2,
      screen_2_sticker_3: this.screen_2_sticker_3,
      screen_2_sticker_4: this.screen_2_sticker_4,
      screen_2_text: this.screen_2_text,
      your_name: this.your_name,
    };
  }
}
