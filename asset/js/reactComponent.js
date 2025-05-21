import { options } from 'less';
import React from 'react';
import ReactDOM from 'react-dom';

// console.log("a");
// let app = {
//     title :"your new title",
//     subtitle:"your new subtitle",
//     // options : ["one","tow"],
//     options : [],
// }
// var template =( 
// <div>
//     <h1>
//         {app.title}
//     </h1>
//     {app.title && <p>app.subtitle</p>}
//     <p>
//         {app.subtitle}
//     </p>
//     {app.options.length > 0 && <p>here your options:</p>}
//     <ol>
//         <li>a-1</li>
//         <li>a-2</li>
//         <li>a-3</li>
//     </ol>
// </div>
// );

// let userName = "mina";
// let details  = {
//     // title : 'myname',
//     age:21 ,
//     // location:"shiraz",
// }
// let getlocation = (location)=>{
//     if(location){
//             return location
//     } 
// }
// const tamrin = (
//     <div>
//         <h1>{details.title ? userName : 'Anonymous'}</h1>
//         {/* <p>{Object.keys(details)[0]}:{details.age}</p> */}
//         {(details.age && details.age >= 18) && <p>{Object.keys(details)[0]}:{details.age}</p>}
//         {getlocation(details.location)}
//     </div>
// )

// add EVENT HANDLER
// let count = 0;
// const myid = 'myId';
// const addOne = () => {
//     console.log("AddOne");
//     count++;
//     renderCounterApp();

// }
// const resetCounter = () => {
//     console.log("reset");
//     count = 0;
//     renderCounterApp();
// }
// const minusOne = () => {
//     console.log("minusOne");
//     if(count > 0){
//     count--;
//     }
//     renderCounterApp();

// }

// var approot = document.getElementById("root");
// // ReactDOM.render(eventApp,approot);

// const renderCounterApp = () => {
//     const eventApp = (
//         <div>
//             <h1>
//                 count : {count}
//             </h1>
//             <button id={myid} className='bg-success' onClick={addOne}>+1</button>
//             <button id="reset" className='bg-info' onClick={resetCounter}>reset</button>
//             <button id="minus" className='bg-danger' onClick={minusOne}>-1</button>
//         </div>
//     );
//     ReactDOM.render(eventApp, approot);
// }
// renderCounterApp();


















// var approot = document.getElementById("root");
// const app = {
//     title: "indesision App",
//     subtitle: "Put your life in hand of computer",
//     option: [],
// }
// const removeAll = ()=>{
//     app.option = [];
//     indesisionApp();
// }
// const onFormSubmit = e => {
//     e.preventDefault();
//     console.log("form submited");
//     const newOptions = e.target.elements.option.value;
//     console.log(newOptions);

//     if (newOptions) {
//         app.option.push(newOptions);
//         e.target.elements.option.value = '';
//         indesisionApp();
//     }
// }
// const numbers = [10,5205,101];
// const makeDesision = ()=>{
//     const randomNum =Math.floor(Math.random() * app.option.length);
//     const option = app.option[randomNum];
//     alert(option);

// }
// const indesisionApp = () => {
//     const template = (
//         <div>
//             <h1>
//                 {app.title}
//             </h1>
//             <p>
//                 {app.subtitle && <p>{app.subtitle}</p>}
//             </p>
//             <p>
//                 {app.option.length}
//             </p>
//             <p>
//                 {app.option.length>0 ? 'your options' : 'no options' }
//             </p>
//             {
//                 [99,98,97]
//             }
//             {
//                 [<p key="a">a</p>,<p key="b">b</p>,<p key="c">c</p>]
//             }
//             {
//                 [<li key="a">a</li>,<li key="b">b</li>,<li key="c">c</li>]
//             }
//             {
//                 numbers.map(number=>number*2)
//             }
//             {
//                 numbers.map(number=><p>{number}</p>)
//             }
//             <button onClick={makeDesision} disabled={app.option.length<=0}>
//                 what should I do 
//             </button>
//             <ol>
//                 {
//                     app.option.map(item=><li key={item}>{item}</li>)
//                 }
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name='option' />
//                 <button>
//                     add options
//                 </button>
//             </form>
//             <button onClick={removeAll}>
//                 removeAll
//             </button>
//         </div>
//     );
//     ReactDOM.render(template, approot);
// }
// indesisionApp();











/*----------------------------------
|
|
|           VISIBLE TOGLE
|   
|-------------------------------------*/
// let approot = document.getElementById("root");
// let pStyle = {
//     display : "block",
// };
// let pClassName = "d-block";
// let ShowText = true;
// const title = "visibility toggle";
// let buttonText = "hide txt"
// const showHideTxt= ()=>{
//     // let buttonText = "show txt";
//     // VisibleTogle();
//     console.log("b");

//     if(buttonText == "hide txt"){
//         buttonText = "show txt";
//         pStyle={
//             display : "none"
//         }
//         ShowText = false;
//         pClassName= "d-none";
//         console.log(pStyle);

//     }else{
//         buttonText = "hide txt";
//         pStyle={
//             display : "block",
//         }
//         pClassName= "d-block";
//         ShowText=true;
//         console.log(pStyle);
//     }

//     VisibleTogle();

// }
// const VisibleTogle = ()=>{
//     const themeBuilder = (
//         <div>
//             {/* <h1>
//                 {title}
//             </h1>
//             <button onClick={showHideTxt}>
//                 {buttonText}
//             </button>
//             <p style={pClassName}>
//                 here is your details, you can see it know, are you happy? &smile;
//             </p> */}
//             <h1>
//                 {title}
//             </h1>
//             <button onClick={showHideTxt}>
//                {buttonText}
//             </button>
//             {ShowText && <p>here is your details, you can see it know, are you happy? &#128512;</p>}
//             <p style={pStyle}>
//             here is your details, you can see it know, are you happy? &#128512;
//             </p>
//             <p className={pClassName}>
//             here is your details, you can see it know, are you happy? &#128512;
//             </p>
//         </div>
//     );
//     ReactDOM.render(themeBuilder,approot)
// }
// VisibleTogle();









/*----------------------------------
|
|
|           Classes
|
|   
|-------------------------------------*/

// class Person {
//     constructor(fname,age){
//         this.fname = fname;
//         this.age = age;
//     }
//     getGriting(){
//         return `Hi. I am ${this.fname}`;

//     }
//     getDescription(){
//         return `${this.fname} is ${this.age} yers old.`;

//     }

// }

// class Student extends Person{
//     constructor(fname,age,major){
//         super(fname,age);
//         this.major = major;
//     }
//     hasMajor(){
//         // logocal not oprator
//         return !!this.major;
//         // this.major can be text !! make it true
//     }
//     getDescription(){
//         let description = super.getDescription();
//         return `${description}. my major is ${this.major}`;

//     }
// }

// class traveler extends Person{
//     constructor(name , age ,homelocation){
//         super(name,age);
//         this.homelocation = homelocation;
//     }
//     getGriting(){
//         let greating = super.getGriting();
//         if(this.homelocation){
//             greating = `I am visiting from ${this.homelocation}`;
//         }
//         return greating;
//     }
// }

// const me =new Student("saman",42,"Fish farming");
// console.log(me.getDescription());

// let other = new traveler("jack",42,"milan");
// console.log(other.getGriting());





/*----------------------------------
|
|           04-26
|           react Component
|
|   
|-------------------------------------*/
// class IndecisionApp extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Action />
//                 <Options />
//                 <AddOption />
//             </div>
//         )
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     indesition App
//                 </h1>
//                 <h2>
//                     put your life in the hand of a computer.
//                 </h2>
//             </div>
//         );
//     }
// }

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button>
//                     What should I do?
//                 </button>
//             </div>

//         )
//     }
// }

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>
//                     your Option are here:
//                 </h2>
//                 <Option />
//             </div>
//         )
//     }
// }

// class Option extends React.Component {
//     render() {
//         return (
//             <ol>
//                 <li>
//                     first option
//                 </li>
//                 <li>
//                     second option
//                 </li>
//             </ol>
//         )
//     }
// }

// class AddOption extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button>
//                     Add new Option
//                 </button>
//             </div>
//         )
//     }

// }

// // const jsx = (
// //     <div>
// //         <Header />
// //         <Action />
// //         <Options />
// //         <AddOption />
// //     </div>
// // )
// // ReactDOM.render(jsx,document.getElementById("root"));
// ReactDOM.render(<IndecisionApp />, document.getElementById("root"));








/*----------------------------------
|
|           04-28
|           react Component props
|
|   
|-------------------------------------*/
class IndecisionApp extends React.Component {
    render() {
        const title = "IndecisionApp!";
        const subTitle= "put your life in the hand of a computer.";
        const options = ["first option","second option", "third option"];
        return (
            <div>
                {/* <Header title="IndecisionApp"/> */}
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <h2>
                    {this.props.subTitle}
                </h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>
                    What should I do?
                </button>
            </div>

        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    your Option are here:( {this.props.options.length} items):
                </h2>
                <ul>
                    {
                     this.props.options.map(list => <Option key={list} listText={list} />)
                    }
                 </ul>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.listText}>
                {this.props.listText}
            </li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>
                    Add new Option
                </button>
            </div>
        )
    }

}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));