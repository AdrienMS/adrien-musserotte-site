/**
 * ```ts
 * class Project {
 *      name: string;
 *      image: string;
 *      subject: string;
 *      desc: string;
 *      technologies: Array<string>;
 * }
 * ```
 */
export class Project {
    public name: string;
    public image: number;
    public subject: string;
    public desc: string;
    public technologies: Array<string>;

    constructor(
        name: string = '',
        image: number = 0,
        subject: string = '',
        desc: string = '',
        technologies: Array<string> = []
        ) {
        this.name = name;
        this.image = image;
        this.subject = subject;
        this.desc = desc;
        this.technologies = technologies;
    }

    public getFormParams(): Array<{name: string, type: string, required: boolean}> {
        return [
            {name: 'Nom', type: 'input', required: true},
            {name: 'Image', type: 'image', required: true},
            {name: 'Subject', type: 'input', required: true},
            {name: 'Description', type: 'textarea', required: true},
            {name: 'Technologies', type: 'list', required: true}
        ];
    }
}
