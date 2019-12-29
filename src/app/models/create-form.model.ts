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
}