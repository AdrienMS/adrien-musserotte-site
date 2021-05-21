export class About {
    public image: number;
    public desc: string;

    constructor(image: number = 0, desc: string = '') {
        this.image = image;
        this.desc = desc;
    }

    public getFormParams(): Array<{name: string, type: string, required: boolean}> {
        return [
            {name: 'Image', type: 'image', required: true},
            {name: 'Description', type: 'textarea', required: true}
        ];
    }
}
