class SLList{
    constructor(){
        this.head = null
    }

    push(){}

    pop(){}

}


class SLNode{
    constructor(val,pri){
        this.val = val
        this.next = null
        this.pri = pri
    }
}

//Dunavan
class SLNode {
    constructor(value,priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class SLList {
    constructor(){
        this.head = null;
    }

    push(value, priority) {
        let newNode = new SLNode(value,priority);
        if(this.head == null){
            this.head = newNode;
            return this;
        }
        if(priority < this.head.priority){
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        while(runner.next != null && priority > runner.next.priority){
            runner = runner.next;
        }
        newNode.next = runner.next;
        runner.next = newNode;
        return this;
    }

    pop(){
        if(this.head == null){
            return "The list is already empty.";
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp;
    }

    display(){

    }
}

let SLL = new SLList();
console.log(SLL.push(1,5));
console.log(SLL.push(1,1));
console.log(SLL.push(1,3));
console.log(SLL.push(1,10));
console.log(SLL.pop());
console.log(SLL)

//Todd
class SLList{
    constructor(){
        this.head = null
    }

    push(SLNode){
        if(this.head ==null){
            this.head = SLNode;
        }
        else{
            if(SLNode.pri<this.head.pri){
                SLNode.next=this.head;
                this.head = SLNode;
                return this
            }
            let runner = this.head
            while(SLNode.pri > runner.pri && runner.next!=null){
                runner = runner.next
            }
            SLNode.next = runner.next;
            runner.next = SLNode;
            return this
        }
    }

    pop(){
        if(this.head!=null){
            let holder = this.head
            this.head = this.head.next
            return holder
        }
        return this
    }

    print(){
        let runner = this.head
        while(runner!=null){
            console.log(runner.val)
            runner=runner.next
        }
    }

}

class SLNode{
    constructor(val,pri){
        this.val = val
        this.next = null
        this.pri = pri
    }
}

const myList = new SLList;
const node1 = new SLNode(100,2)
const node2 = new SLNode(50,1)
const node3 = new SLNode(1,3)
myList.push(node1)
myList.push(node2)
myList.push(node3)
myList.print()
console.log(myList.pop())
myList.print()

//Jacob
class SLList{
    constructor(){
        this.head=null
    }

    pop(){
        if (this.head == null){
            return null
        }
        var hydra = this.head.next
        this.head = hydra
        return this.head
    }

    priorityPush(node){
        if (this.head == null){
            this.head = node
            return this.head
        }
        if (this.head.next == null){
            if (this.head.priority > node.priority){
                var hydra = this.head
                node.next = hydra
                this.head = node
            }
            else this.head.next = node
            return this.head
        }
        if (this.head.priority > node.priority){
            var hydra = this.head
            this.head = node
            this.head.next = hydra
        }
        else{
            var runner = this.head.next
            var walker = this.head
            while (runner.next != null && runner.priority < node.priority){
                runner = runner.next
                walker = walker.next
            }
            if (runner.priority < node.priority){
                runner.next = node
            }
            else{
                walker.next = node
                walker.next.next = runner
            }
        }
        return this.head
    }
}