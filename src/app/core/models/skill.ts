/**
 * ```ts
 * class Skill {
 *      name: string;
 *      percentage: number;
 * }
 * ```
 */

export class Skill {
    public name: string;
    public percentage: number;

    constructor(name: string = '', percentage: number = 0) {
        this.name = name;
        this.percentage = percentage;
    }

    public getFormParams(): Array<{name: string, type: string, required: boolean}> {
        return [
            {name: 'Nom', type: 'input', required: true},
            {name: 'Pourcentage', type: 'number', required: true}
        ];
    }
}
