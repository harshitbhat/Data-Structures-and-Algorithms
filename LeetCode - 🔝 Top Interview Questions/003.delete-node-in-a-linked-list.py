class Solution:
    def deleteNode(self, node):
        if node.next == None:
            node = None
        else:
            node.val = node.next.val
            node.next = node.next.next