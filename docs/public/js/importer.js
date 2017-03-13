var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/softlang/metalib/master/haskell/fsml/src/Language/FSML/Checker.hs');
request.onreadystatechange = function () {
  console.log(event);
};
request.send();