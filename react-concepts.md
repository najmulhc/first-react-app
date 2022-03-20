### Conceptual react Js for interview 

### what is npx/npm?(npx is not the ex of np)
npm means node package manager that manages node packages of your site,
npx meanst node package executive that executes node packages. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

## npm just manages the packages, but dont run them easily. for what npx came here.

### what happen when you run npx create-react-app your-project?
it is a cli(command line interface) that allows you to create a parfect react app. it sets all the necessiry files and folder rerquired to run the react app.

### what it package.json?
the json file that saves all the packages and their running cli info

## the index.js file is the entry point of an app and all the task of the app runs from here it stores all the react element inside the root div of the html file that finally display on the browser.


### what is the readme.md file?
this is a mark down file that allows you to display the info of your app.

### what is react?
react is a javascript library(not a framework) that we use to make ui for websites. React has more freedom then Angular. React has more performence than angular(supar fast). It is declaretive and updates effectively . It is a component-based library.

### how react works?


### what do you know about the life cycle of a react component?

### what is jsx?
js is not HTML(actually it is a syntactic sugar). it is some premade js components that are made by the creators of react using React.createElement(component, props, ...children) function to provide a better developer experience . react will compile the code into row js with React.createElement function to make a pure html element. 

### tell me about the html tags used in jsx?
the html tags used jsx are built in components that starts with a smaller letter. so the developer defined components must be start with capital letter so that react can handle them as user defined component other than built in components.

### what is babel?
babel(a preprocessor used by react) does the compilation part to convert jsx code into pure js code so that browser can run it.

### what are the props in react?
(look on the article link: https://reactjs.org/docs/jsx-in-depth.html)
props are data that pushed into a react component to display that on the ui. it has to used like attributes in the component tag of the jsx syntex. on the component, you can access that data using props object and each attribute is a property of the props object. and you can access them on that using dot notation.

note: component props is a read only data so you can not change the data inside the component

### what is a react component?
it is a building block of a react app. it allows you to divide your app into indipendents isolated pieces. it helps you to organise 

### what is unidirectional data flow?(one way binding aka props drilling)
this is a data flow where data flows in a single path where each component gets its props from its parent components. it is a faster way of data flow that is used by react. 

### how to display a component in the ui?
you must have to connect(directly or via another component that has connetion  ) with the app.js file of your project to display the component.


### what is state?
state is a data of a component that can be change  based on some event fired;

### how a state work?
state is a asynchronous work; that means the set function of the state will not work in a synchronas way.

### what is the uses of the second parameter of useEffect hook?
the second parameter of useEffect hook is the dependency(s) of the hook that means the hook will work if the dependency(s) changes.

### what is a hook?
is a type of function that make change on the ui . 
How react hook works?

### what is the main diffirence of state and props?
state is a hook that allows you to change the value of a variable where props are the data we pass to a component to show it. you can pass a state through props. 

#### Note: you state is use to change data , but props can not be changable(read-only);
if any component uses a state that calls statefull component . statelest or presentational component means the component does not have a state. 


recap: jsx, fake html converttion by babel. create-react-app and what it does, npm and npx. 
component, props, class component, one way data binding by props. read-only props, state and effect, hook, effect is an asynchronous activity. virtual dom , class components, component lifeCycle