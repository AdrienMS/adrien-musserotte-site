/**
 * ```ts
 * class Image {
 *      name: string;
 *      path: string;
 * }
 * ```
 */
export class Image {
    public name: string;
    public path: string;

    constructor(name: string = '', path: string = '') {
        this.name = name;
        this.path = path;
    }

    public getFormParams(): Array<{name: string, type: string, required: boolean}> {
        return [
            {name: 'Nom', type: 'input', required: true},
            {name: 'Chemin', type: 'path', required: true}
        ];
    }
}
