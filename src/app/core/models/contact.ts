/**
 * ```ts
 * class Contact {
 *      mail: string;
 *      name: string;
 *      content: string;
 *      date: Date;
 * }
 * ```
 */
export class Contact {
    public mail: string;
    public name: string;
    public content: string;
    public date: Date;

    constructor(mail: string, name: string, content: string, date: Date) {
        this.mail = mail;
        this.name = name;
        this.content = content;
        this.date = date;
    }
}
