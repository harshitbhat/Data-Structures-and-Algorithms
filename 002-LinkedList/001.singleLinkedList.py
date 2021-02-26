class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def printList(self):
        current = self.head
        while current != None:
            print(current.data, end=' ')
            current = current.next
        print()
    
    def insesrtAtBeginning(self,val):
        newNode = Node(val)
        newNode.next = self.head
        self.head = newNode
    
    def insertAtEnd(self,val):
        newNode = Node(val)
        current = self.head
        while current.next != None:
            current = current.next
        current.next = newNode

    def insertAtPos(self,val,pos):
        if pos < 0 or self.head == None:
            return
        if pos == 0:
            self.insesrtAtBeginning(val)
        else:
            ct = 0
            current = self.head
            while ct != pos - 1:
                current = current.next
                if current == None:
                    return
                ct += 1
            if current == None:
                return
            newNode = Node(val)
            newNode.next = current.next
            current.next = newNode
    
    def deleteAtBeginning(self):
        if self.head == None:
            return
        self.head = self.head.next
    
    def deleteLastNode(self):
        if self.head == None:
            return
        current = self.head
        if current.next == None:
            self.head = None
            return
        while current.next.next != None:
            current = current.next
        current.next = None
    
    def deleteVal(self,key):
        if self.head == None:
            return
        if self.head.data == key:
            self.head = self.head.next
        else:
            current = self.head
            while current.next.data != key and current:
                current = current.next
            current.next = current.next.next

# List = 5 -> 1 -> 17 -> 4 -> 8

firstNode = Node(5)
secondNode = Node(1)
thirdNode = Node(17)
fourthNode = Node(4)
fifthNode = Node(8)

linkedList = LinkedList()
linkedList.head = firstNode
firstNode.next = secondNode
secondNode.next = thirdNode
thirdNode.next = fourthNode
fourthNode.next = fifthNode

linkedList.printList()
linkedList.insesrtAtBeginning(9)
linkedList.printList()
linkedList.insertAtEnd(100)
linkedList.printList()
linkedList.insertAtPos(34,5)
linkedList.printList()
linkedList.deleteAtBeginning()
linkedList.printList()
linkedList.deleteLastNode()
linkedList.printList()
linkedList.deleteVal(5)
linkedList.printList()
linkedList.deleteVal(8)
linkedList.printList()