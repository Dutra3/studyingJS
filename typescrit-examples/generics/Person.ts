import { Entity } from "./Entity";

export class Person extends Entity {
    constructor(readonly name: string, readonly age: number) {
        super(Math.floor(Math.random() * 1000));
    }
}