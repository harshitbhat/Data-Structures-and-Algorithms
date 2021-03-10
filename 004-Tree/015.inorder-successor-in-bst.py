def inOrder(root,travel):
    if root == None:
        return
    inOrder(root.left,travel)
    travel.append(root)
    inOrder(root.right,travel)
    
def inorderSuccessor(root, x):
    travel = []
    inOrder(root,travel)
    for i in range(0,len(travel)):
        if travel[i].data == x.data:
            break
    if travel[len(travel)-1].data == x.data:
        return None
    return travel[i+1]