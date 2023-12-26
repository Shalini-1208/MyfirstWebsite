var arr=[];
arr=[1,2,3,4,5];
arr.push(3);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.splice(3,0,"hi"));
console.log(arr.slice(0));
console.log(arr.reverse());
var arr2=[7,8,9];
var arr3=[[1,2,3,4],[5,6,7,8]];
console.log(arr3[1][3]); 

 var obj=
 {
    name:"shalini",
    age:20,
    arrs:[1,2,3,4,5],
    myfunc:function()
    {
        return this.name;
    }

 };
delete obj.age;
 
 
 console.log(Object.values(obj));
 for(let x in obj)
 {
    console.log(obj[x]);
 }
 console.log(obj.name,obj.arrs[2],obj.myfunc());  
 var obj2=Object.create(obj);
 obj.age=30;
 obj2.num=567;
 console.log(obj2);
 class p1{ 
   constructor()
   {
      this.names="shalini"; 
   }
   bake(){
      return console.log(`i am baking ${this.names}`)
   }
 }
 const objs=new p1();
 console.log(objs.bake());
 objs.names="hi"
 console.log(objs.bake());