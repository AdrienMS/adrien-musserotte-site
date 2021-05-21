import { Skill } from './skill';

/**
 * ```ts
 * class SkillCategory {
 *      name: string;
 *      skills: Array<Skill>;
 *      image: string;
 *      position: string;
 * }
 *
 * class Skill {
 *      name: string;
 *      percentage: number;
 * }
 * ```
 */
export class SkillCategory {
    public name: string;
    public skills: Array<Skill>;
    public image: number;
    public position: string;

    constructor(name: string = '', skills: Array<Skill> = [], image: number = 0, position: string = '') {
        this.name = name;
        this.skills = skills;
        this.image = image;
        this.position = position;
    }

    public getFormParams(): Array<{name: string, type: string, required: boolean}> {
        return [
            {name: 'Titre', type: 'input', required: true},
            {name: 'Skills', type: 'array_input', required: true},
            {name: 'Image', type: 'image', required: true},
            {name: 'Position', type: 'input', required: true}
        ];
    }
}
