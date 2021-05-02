def towerOfHanoi(disks, towA, towB, towC):
    if disks == 1:
        print(f'Move disk {disks} from {towA} to {towC}')
        return
    towerOfHanoi(disks - 1, towA, towC, towB)
    print(f'Move disk {disks} from {towA} to {towC}')
    towerOfHanoi(disks - 1, towB, towA, towC)

def main():
    disks = 4
    towA = 'A'
    towB = 'B'
    towC = 'C'
    towerOfHanoi(disks, towA, towB, towC)

if __name__ == '__main__':
    main()