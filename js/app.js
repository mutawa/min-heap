class MinHeap {
  nodes;
  constructor() {
    this.nodes = [];
  }
  size = () => this.nodes.length;

  add = (data) => {
    this.nodes.push(data);
    this.heapifyUp();
    console.table(this.nodes);
  };

  getParentIndex = (index) => Math.ceil((index - 2) / 2);
  getLeftChildIndex = (index) => index * 2 + 1;
  getRightChildIndex = (index) => index * 2 + 2;

  hasLeftChild = (index) => this.getLeftChildIndex(index) < this.size();
  hasRightChild = (index) => this.getRightChildIndex(index) < this.size();
  hasParent = (index) => this.getParentIndex(index) >= 0;

  leftChild = (index) => this.nodes[this.getLeftChildIndex(index)];
  rightChild = (index) => this.nodes[this.getRightChildIndex(index)];
  parent = (index) => this.nodes[this.getParentIndex(index)];

  swap = (indexOne, indexTwo) => {
    const temp = this.nodes[indexOne];
    this.nodes[indexOne] = this.nodes[indexTwo];
    this.nodes[indexTwo] = temp;
  };

  peak = () => this.nodes.length > 0 && this.nodes[0];

  poll = () => {
    if (this.size() === 0) throw new Error("Heap is empty");

    const node = this.nodes[0];
    this.nodes[0] = this.nodes.pop();
    this.heapifyDown();
    return node;
  };

  heapifyDown = () => {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.nodes[index] < this.nodes[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  };

  heapifyUp = () => {
    let index = this.size() - 1;
    while (this.hasParent(index) && this.parent(index) > this.nodes[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  };
}

const heap = new MinHeap();
heap.add(11);
heap.add(23);
heap.add(33);
heap.add(44);
heap.add(55);

//heap.swap(0, 1);

//console.clear();
