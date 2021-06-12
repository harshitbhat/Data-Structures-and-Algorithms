# ---------------------------------------------------------------------------- #
#                                Tower of Hanoi                                #
# ---------------------------------------------------------------------------- #

def towerOfHanoi(disks, sourceTower = 1, tempTower = 2, destinationTower = 3):
    if disks:
        towerOfHanoi(disks-1, sourceTower, destinationTower, tempTower)
        print(f'Move disk {disks} from Tower-{sourceTower} to Tower-{destinationTower}')
        towerOfHanoi(disks-1, tempTower, sourceTower, destinationTower)


disks = 3
towerOfHanoi(disks)