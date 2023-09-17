class SLL {
    constructor() {
        this.head = null
        this.length = 0
    }

    addToFront(val) {
        const newNode = new ListNode(val);
        if (this.length === 0){
            this.head = newNode;
            this.length++;
            return this
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    display() {
        let result = '';
        let runner = this.head;
        while(runner) {
            result += runner.data + ' | ';
            runner = runner.next;
        }
        return result.trim();
    }
}

class ListNode {
    constructor(val) {
        this.data = val;
        this.next = null
    }
}

const sll = new SLL();

sll.addToFront(76);
sll.addToFront(2);
sll.addToFront(11.41)

console.log(sll.head)
console.log(sll.display())