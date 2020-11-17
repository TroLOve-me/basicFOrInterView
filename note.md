## vscode中运行ts代码 
  npm i ts-node -g
  用code runner运行代码
## 内存区域
  程序运行时，需要内存空间存放数据，内存可以分为stack 和heap
  stack一般存放基本数据类型 有序 大小固定
  heap 存放对象和函数 大小不固定
## 数据结构
  栈(stack) 先进后出
  eg.
  function a(){
    function b(){
      function c(){

      }
      c();
    }
    b();
  }
  debugger;
  a();
  执行顺序 a()=>b()=>c()=>c结束=>b结束=>a结束;

  队列(queue) 先进先出