function towerOfHanoi(disks, towA, towB, towC) {
  if (disks === 1) {
    console.log(`Mode disk ${disks} from ${towA} to ${towC}`);
    return;
  }
  towerOfHanoi(disks - 1, towA, towC, towB);
  console.log(`Mode disk ${disks} from ${towA} to ${towC}`);
  towerOfHanoi(disks - 1, towB, towA, towC);
}

const disks = 3,
  towA = 'A',
  towB = 'B',
  towC = 'C';

towerOfHanoi(disks, towA, towB, towC);
