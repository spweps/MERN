class heap{
    constructor(){
        this.items = [null]
    }

    add(){}

    remove(){}
}


function heap(input, i){
    let left = 2 * i + 1;
    let right = 2 * i +2;
    let max = i
    this.items=[null]
    let add = ()=>{

    }
    let remove = ()=>{
        
    }
}


let myheap = new heap()

//
var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);

//
//HeapSort
const heapsort = arr => {
    const a = [...arr];
    let l = a.length;
  
    const heapify = (a, i) => {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let max = i;
      if (left < l && a[left] > a[max]) max = left;
      if (right < l && a[right] > a[max]) max = right;
      if (max !== i) {
        [a[max], a[i]] = [a[i], a[max]];
        heapify(a, max);
      }
    };
  
    for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
    for (i = a.length - 1; i > 0; i--) {
      [a[0], a[i]] = [a[i], a[0]];
      l--;
      heapify(a, 0);
    }
    return a;
  };
  
  console.log(heapsort([6, 3, 4, 1]));


//
function heapify(arr, length,i){
    let largest = i
    let left = i * 2 + 1

    if(left<length && arr[left] > arr[largest]){
        largest=left
    }
    if(right<length && arr[right] > arr[largest]){
        largest = right
    }
    if(largest !=i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, length, largest)
    }
    return arr
}

function heapSort(arr){
    let length = arr.length
    let i = Math.floor(length/2-1)
    let k = length -1

    while (i>=0){
        heapify(arr,length,i)
        i--
    }
    while (k>=0){
        [arr[0], arr[k]] = [arr[k], arr[0]]
        heapify(arr, k, 0)
        k--
    }
    return arr
}

//Dunavan
class Heap {
    constructor(){
        this.items = [null]
    }

    promote = num => {
        this.items.push(num);
        let location = this.items.length-1;
        while(this.items[location] < this.items[Math.floor(location/2)]){
            this.items[location] = this.items[Math.floor(location/2)];
            this.items[Math.floor(location/2)] = num;
            location = Math.floor(location/2)
        }
        return this.items;
    }

    demote = () => {
        let holder = this.items[1];
        this.items[1] = this.items[this.items.length-1];
        this.items[this.items.length-1] = holder;
        this.items.pop();
        let length = this.items.length;
        let location = 1
        while((this.items[location] > this.items[location*2] || this.items[location] > this.items[location*2+1]) && location*2 < length){
            let swapIndex = location*2;
            if(this.items[location*2] > this.items[location*2+1]){
                swapIndex++;
            }
            holder = this.items[location];
            this.items[location] = this.items[swapIndex];
            this.items[swapIndex] = holder;
            location = swapIndex;
        }
        return this.items;
    }
}

let newHeap = new Heap();
console.log(newHeap.promote(5));
console.log(newHeap.promote(10));
console.log(newHeap.promote(3));
console.log(newHeap.promote(20));
console.log(newHeap.promote(15));
console.log(newHeap.promote(2));
console.log(newHeap.promote(25));

console.log(newHeap.demote());
console.log(newHeap.demote());
console.log(newHeap.demote());

//Jacob
class heap{
    constructor(){
        this.items = [null]
    }

    add(newVal){
        this.items.push(newVal)
        let newPos = this.items.length-1 // Keeps track of the position of the new variable
        while (this.items[Math.floor(newPos/2)] > this.items[newPos] && this.items[Math.floor(newPos/2)] != null){
            this.items[newPos] = this.items[Math.floor(newPos/2)]
            this.items[Math.floor(newPos/2)] = newVal
            newPos = Math.floor(newPos/2)
        }
        console.log(this.items)
    }

    remove(){ // [null, 12, 15, 16, 100, 99, 105]
        this.items[1] = this.items[this.items.length-1] // [null, 105, 15, 16, 100, 99, 105]
        this.items.pop() // [null, 105, 15, 16, 100, 99]
        let pos = 1 // 1
        while (this.items[pos * 2 +1]){ // 16 exists
            if (this.items[pos * 2] < this.items[pos] || this.items[pos * 2 + 1] < this.items[pos]){ //15 < 105, 16 < 105
                if (this.items[pos * 2] < this.items[pos * 2 + 1]){ // 15 < 16
                let temp = this.items[pos] // 105
                this.items[pos] = this.items[pos * 2] // [null, 15, 15, 16, 100, 99]
                this.items[pos * 2] = temp // [null, 15, 105, 16, 100, 99]
                pos = pos * 2 // 2
                }
                else if (this.items[pos * 2 + 1] < this.items[pos]){
                    let temp = this.items[pos]
                    this.items[pos] = this.items[pos * 2 + 1]
                    this.items[pos * 2 + 1] = temp
                    pos = pos * 2 + 1
                }
                else break
            }
        }
        if (this.items[pos * 2]){
            if (this.items[pos * 2] < this.items[pos]){
                    let temp = this.items[pos]
                    this.items[pos] = this.items[pos * 2]
                    this.items[pos * 2] = temp
                    pos = pos * 2
                }
            }
            console.log(this.items)
        }
}