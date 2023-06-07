function interweavingStrings(one, two, three) {
  let mimicOne = one;
  let mimicTwo = two;
  let savings = {};
  let saving = '';
  for (let i = 0; i < three.length; i++) {
    console.log('111: ', mimicOne);
    console.log('222: ', mimicTwo);
    console.log('--------');
    if (mimicOne[0] === three[i] && mimicTwo[0] === three[i]) {
      saving = saving + three[i];
      mimicOne = mimicOne.substring(1);
      mimicTwo = mimicTwo.substring(1);
      continue;
    }

    if (mimicOne[0] === three[i]) {
      mimicOne = mimicOne.substring(1);
      continue;
    }

    if (mimicTwo[0] === three[i]) {
      mimicTwo = mimicTwo.substring(1);
      continue;
    }

    if (saving.length > 0 && saving[0] === three[i]) {
      saving = saving.substring(1);
      continue;
    }

    console.log(saving);
    console.log(i);
    console.log('stop:', three[i]);
    console.log('mimicOne:', mimicOne);
    console.log('mimicTwo:', mimicTwo);

    return false;
  }

  if (mimicOne.length || mimicTwo.length) {
    return false;
  }

  return true;
}

console.log(interweavingStrings('algoexpert', 'your-dream-job', 'your-algodream-expertjo'));
