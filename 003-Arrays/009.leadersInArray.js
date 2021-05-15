// No greater element in right of the element

// Method 1 - Naive, 2 loops

function leadersN(arr) {
  const leaders = [];
  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      leaders.push(arr[i]);
    }
  }
  return leaders;
}

console.log(leadersN([7, 10, 4, 6, 5, 2]));

function leaders(arr) {
  const leaders = new Array();
  let cur_leader = arr[arr.length - 1];
  leaders.push(cur_leader);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > cur_leader) {
      cur_leader = arr[i];
      leaders.push(cur_leader);
    }
  }
  return leaders.reverse();
}

console.log(leaders([7, 10, 4, 6, 5, 2]));
