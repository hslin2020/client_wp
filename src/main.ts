///<reference path="test/Test.ts"/>
import Test = test.Test;
export default class main {
    private _test: Test;
    constructor() {
        this._test = new Test();
        this._test.sayHello();
    }
}