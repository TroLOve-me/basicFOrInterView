class Stack{
  private arr:number[]=[];
  push(ele:number){
    this.arr.push(ele);
  }
  pop():number{
    return this.arr.pop();
  }
  print(){
    console.log(this.arr.toString());
    
  }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.print();

