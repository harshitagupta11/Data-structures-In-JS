class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BstTree {
    constructor(){
        this.root = null
    }
    
    isEmpty(){
            return this.root===null
    }
    makeTree(val){
        const newNode = new Node(val) // ek node create karenge
        if(this.root===null){ //check karenge if root khali hai 
            this.root = newNode // root mein new node dal denge
        }else{ // root already fill hai 
            this.insertNode(this.root,newNode) // to left or right according to condition insert karenege 
        }
    }
    
    insertNode(root,newNode){ 
        // check karenge left mein insert hoga ya right mein 
        if(newNode.val<root.val){
            if(root.left===null){ // left empty hai 
                root.left = newNode // directly left mein insert 
            }else{ // left mein already value hai 
                this.insertNode(root.left,newNode) // again check karenge left ke kis node mein insert hoga 
            }
            
        }else{
            if(root.right===null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}

let bst = new BstTree()
bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(30)
bst.makeTree(11)
console.log(bst)