function setup(arr) {
  var friends = {};

  for (const member of arr) {
    const one = member[0];
    const two = member[1];

    if (friends[one]) {
      friends[one].push(two);
    } else {
      friends[one] = [];
      friends[one].push(two);
    }

    if (friends[two]) {
      friends[two].push(one);
    } else {
      friends[two] = [];
      friends[two].push(one);
    }
  }

  return friends;
}
