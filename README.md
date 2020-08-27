# min-heap

This is a testing playground and implementation of MinHeap using JavaScript.

The code is adapted from Java.

# source video

[Data Structures: Heaps](https://www.youtube.com/watch?v=t0Cq6tVNRBA)

# How does it work?

Currently, the is no visual interface. You will have to open Console/Developer tools and type:

```
   const heap = new MinHeap();
   heap.add(15);       // heap root will be 15
   heap.add(4);        // 4 will be heapfiedUp as the root since it is smaller
   heap.add(22);       // will be added as right child

   heap.peek();         // returns the element at the root (4);

   heap.poll();         // takes out the root, and re-sorts / heapifyDown the last element

```
