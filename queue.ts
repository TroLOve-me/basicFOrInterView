class Queue{
  private arr:number[]=[];
  enqueue(ele:number){
    this.arr.push(ele);
  }
  dequeue():number{
    return this.arr.shift();
  }
  print(){
    console.log(this.arr.toString());
  }
}
let queue=new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.print();//2,3
