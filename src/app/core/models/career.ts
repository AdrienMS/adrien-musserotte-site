/**
 * ```ts
 * class Career {
 *      title: string;
 *      dateStart: Date;
 *      dateEnd: Date;
 *      position: string;
 *      desc: string;
 *      img: number;
 * }
 * ```
 */
export class Career {
    public title: string;
    public dateStart: Date;
    public dateEnd: Date;
    public position: string;
    public desc: string;
    public img: number;

    constructor(
        title: string = '',
        dateStart: Date = null,
        dateEnd: Date = null,
        position: string = '',
        desc: string = '',
        img: number = null)
        {
            this.title = title;
            this.dateStart = dateStart;
            this.dateEnd = dateEnd;
            this.position = position;
            this.desc = desc;
            this.img = img;
        }

    public getFormParams(): Array<{name: string, type: string, required: boolean}> {
        return [
            {name: 'Titre', type: 'input', required: true},
            {name: 'Date de début', type: 'date', required: true},
            {name: 'Date de fin', type: 'date', required: false},
            {name: 'Poste', type: 'input', required: true},
            {name: 'Description', type: 'textarea', required: true},
            {name: 'Image', type: 'image', required: true}
        ];
    }
}
