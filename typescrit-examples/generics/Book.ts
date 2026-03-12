import { Entity } from "./Entity";

export class Book extends Entity {
    constructor(public title: string, public author: string, public year?: number) {
        super(Math.floor(Math.random() * 1000));
    }
}