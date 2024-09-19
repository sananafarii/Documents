//const s1 = 'Hello';
//console.log(typeof s1);

//const s2 = new String('hello');
//console.log(typeof s2);

//the parent of everythings 
//console.log(window);


//window.alert();
 
//this property (appVersion) give you some info on system what os you using, this is object with property
//console.log(navigator.appVersion);


//Object Literal
const book1 = {
    title: 'book one',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};


const book2 = {
    title: 'book two',
    author: 'John Doe',
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};


console.log(Object.values(book2));
