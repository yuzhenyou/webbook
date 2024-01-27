## 
## 1.基本数据类型和any类型
> [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%B1%BB%E5%9E%8B](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%B1%BB%E5%9E%8B)

```typescript
// JavaScript中的7种基本数据类型（原始数据类型）和Object
1.String
2.Number
3.Boolean
4.Undefined
5.Null
6.Symbol  //es6新增
7.BigInt  //es6新增

let bool: boolean = false;
bool = 'helloWorld' //不能将类型“string”分配给类型“boolean”

let age: number = 30

let names: string = '张三'
let message: string = `hello ${names}`

let und: undefined = undefined;
let nul: null = null

// undefined与null时所有类型的子类型，可以作为初始默认值使用，严格模式下不建议使用

und = null  //不能将类型“null”分配给类型“undefined”
nul = undefined //不能将类型“undefined”分配给类型“null”

//strictNullChecks就表示是否只允许null和undefined赋值给void类型和它们各自的类型

//ts官方建议这个配置默认为true，可以避免问题查找过于混乱。 //强制关闭，见1.1

let nums: number = undefined

//any不建议使用，失去类型约束意义
let strs: any = '123'

strs = 1231

```
### 1.1.tsconfig.json
```json
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```
## 2.数组和元组
```typescript
let arr: number[] = [1, 2, 3]

// let arr: number[] = [1, 2, 3, '4']  //不能将类型“string”分配给类型“number”

arr.push(4) //快捷提示类型属性方法

//类数组
//类数组:其实它就是一个对象，一个长的像数组的对象。

// 那类数组和数组区别：
// 1.都有length属性
// 2.类数组也可以for循环遍历，有的类数组还可以通过 for of 遍历
// 3.类数组不具备数组的原型方法，因此类数组不可调用相关数组方法（如，push,slicec,concat等等）

function args() {
    console.log(arguments);  //[Arguments] {}
    console.log(typeof arguments); //object
    arguments.length
    arguments[0]
    arguments.push()  //类型“IArguments”上不存在属性“push”  //ts内置了类型
}

//元组

let users: [string, number] = ['张三', 20]

let users: [string, number] = ['张三', 20, true]  //越界报错
//不能将类型“[string, number, boolean]”分配给类型“[string, number]”。
//源具有 3 个元素，但目标仅允许 2 个

//可以使用push方法突破限制，但是数据类型必须时数组约定的类型
users.push('李四')
users.push(30)
users.push(true) //类型“boolean”的参数不能赋给类型“string | number”的参数
```

![image.png](https://cdn.nlark.com/yuque/0/2024/png/22383356/1706342117104-4ca21143-b5eb-4403-8fc1-e3e47d90a3b1.png#averageHue=%23668643&clientId=u66c66441-197e-4&from=paste&height=346&id=u62c46cec&originHeight=346&originWidth=746&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29837&status=done&style=none&taskId=ub3807f24-011a-468f-a0cf-c7bd81a098e&title=&width=746)
## 3.Interface（接口）
```typescript
//一个对象特征的描述
interface IPerson {
    name: string;
    age: number;
    id?: number;
}

const person: IPerson = {
    name: 'zhangsan',
    age: 20,
    id: 1
}
```
## 4.函数定义
```typescript
const add = (x: number, y: number, z?: number): number => {
    if (typeof z === "number") {
        return x + y + z
    } else {
        return x + y
    }

}


interface ISum {
    (x: number, y: number, z?: number): number
}

let add2: ISum = add

let add3: (x: number, y: number, z?: number) => number = add
```
## 5.类型推断&联合类型&类型断言
```typescript
//类型推断：没有显著声明类型，会根据赋值和返回值推断类型
let str = 'hello world'  //let str: string
let num = 100  //let num: number


//联合类型：当不确定类型时可以定义多个类型 |

let strOrNum: string | number

// strOrNum = '123'  strOrNum.length  strOrNum.toString() //可以调用联合类型共有的方法

strOrNum = 100
// strOrNum.length //类型“number”上不存在属性“length”
// strOrNum.toString()


//类型推断：不确定类型时，可以显著告诉编译器当成何种类型去处理 as
/*断言类型，如果在联合类型中不存，断言将会报错 */


const getLength = (val: string | number) => {

    const str = val as string;
    if (str.length) {
        return str.length
    }else {
        const num = val as number
        return num.toString().length
    }

}

//类型守护  type guard
const getLength2 = (val: string | number) => {

    if (typeof val === 'string') {
        return val.length
    }else {
        return val.toString().length
    }

}
```
## 6.Enum（枚举）
```typescript
//枚举的双向绑定性

enum Direction {
    Up,
    Down,
    Left,
    right
}

console.log(Direction.Up)  //0
console.log(Direction[0])  //up

//编译结果
// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 0] = "Up";
//     Direction[Direction["Down"] = 1] = "Down";
//     Direction[Direction["Left"] = 2] = "Left";
//     Direction[Direction["right"] = 3] = "right";
// })(Direction || (Direction = {}));

//基于初始值的自动累加

enum Direction {
    Up = 10,
    Down,
    Left,
    right
}

console.log(Direction.Up)  //10
console.log(Direction.Down)  //11
console.log(Direction[10])  //Up
console.log(Direction[11])  //Down

//编译结果
// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 10] = "Up";
//     Direction[Direction["Down"] = 11] = "Down";
//     Direction[Direction["Left"] = 12] = "Left";
//     Direction[Direction["right"] = 13] = "right";
// })(Direction || (Direction = {}));


//自定义枚举值

enum Direction {
    Up = "UP",
    Down = "DOWM",
    Left = "LEFT",
    right = "RIGHT"
}

console.log(Direction.Up)  //UP

//编译结果
// var Direction;
// (function (Direction) {
//     Direction["Up"] = "UP";
//     Direction["Down"] = "DOWM";
//     Direction["Left"] = "LEFT";
//     Direction["right"] = "RIGHT";
// })(Direction || (Direction = {}));


//枚举的常用用法

enum Direction {
    Up = "UP",
    Down = "DOWM",
    Left = "LEFT",
    right = "RIGHT"
}

let dir = 'UP'

if (dir === Direction.Up) {
    console.log('go up!')
}

//编译结果
// var Direction;
// (function (Direction) {
//     Direction["Up"] = "UP";
//     Direction["Down"] = "DOWM";
//     Direction["Left"] = "LEFT";
//     Direction["right"] = "RIGHT";
// })(Direction || (Direction = {}));


//常量枚举，提高性能，编译会去掉其他无用枚举值

const enum Direction {
    Up = "UP",
    Down = "DOWM",
    Left = "LEFT",
    right = "RIGHT"
}

let dir = 'UP'

if (dir === Direction.Up) {
    console.log('go up!')
}

//编译结果
// var dir = 'UP';
// if (dir === "UP" /* Direction.Up */) {
//     console.log('go up!');
// }
```
## 7.Generics（泛型）
```typescript
//不知道函数具体返回值类型时没法约束得到的值的类型
const getValue = (val) => {
    return val;
}

const strs = getValue('123')  //const strs: any

//当函数传入的参数类型不固定时, 固定类型不灵活

const getValue = (val: string): string => {
    return val;
}

const strs = getValue('123')  //const strs: string 

//此时用泛型，泛型会根据具体的返回值进行类型推断，以此得到一个期望的返回值类型
//需要占位表示 T,U....可以是任意字符的占位符
//函数用function 定义

function getValue<T>(val: T): T {
    return val;
}

const strs = getValue('123')  //const strs: "123" //没有传入具体类型约束的值，传入什么返回的就是什么
const strs: string = getValue('123') //const strs: string  进行string类型
const strVal: string = '123'    //进行string类型约束
const strs = getValue(strVal)   //const strs: string  //返回string类型

//多个泛型类型定义

function getValue<T, U>(arr: [T, U]): [U, T] {
    return [arr[1], arr[0]]
}

let result = getValue(['hello', 123]) //let result: [number, string]
result[0].length  //报错 类型“number”上不存在属性“length”
console.log(result[1].length)  //5  string类型
```
### 7.1泛型约束
```typescript
//泛型约束
function getLength3<T>(arr: T): T {
    console.log(arr.length)   //类型“T”上不存在属性“length”
    return arr
}

//约束为具有length属性的类型，数组
function getLength3<T>(arr: T[]): T[] {
    console.log(arr.length)   
    return arr
}

//不够灵活，可能时object或者string等其他类型
//可以用interface定义,泛型extends，interface所具有的特性约束
interface IWithLength {
    length: number
}

function getLength3<T extends IWithLength>(arr: T): T {
    console.log(arr.length)
    return arr
}

let str3 = getLength3('zhangsan')   //let str3: string
let str3 = getLength3([1, 2, 3])    //let str3: number[]
let str3 = getLength3({ length: 1, name: 'zhangsan' }) 
// let str3: {
//     length: number;
//     name: string;
// }
```
### 7.2泛型在类和接口中的使用
```typescript
class Queue {
    private data: any[] = []
    push(item) {
        return this.data.push(item)
    }
    pop() {
        return this.data.pop()
    }
}

const queue = new Queue()
queue.push('123')
const pops = queue.pop()
if (pops) {
    pops.toFixed()		// pops.toFixed is not a function
}

//用泛型约束
class Queue<T> {
    private data: T[] = []
    push(item: T) {
        return this.data.push(item)
    }
    pop() {
        return this.data.pop()
    }
}

const queue = new Queue<number>()
queue.push(123)
const pops = queue.pop()

if (pops) {
    pops.toFixed()
}

//接口中使用泛型
interface keyValue<T, U> {
    key: T,
    value: U
}

let kv1: keyValue<number, string> = { key: 1, value: 'string' }
let kv2: keyValue<string, number> = { key: 'str', value: 2 }


//使用泛型重新定义数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

```
