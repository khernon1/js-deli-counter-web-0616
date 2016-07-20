var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var str = `Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`;
  katzDeliLine.push(name)
  return str;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    var str = "There is nobody waiting to be served!";
  } else {
    var str = `Currently serving ${deliLine[0]}.`;
    deliLine.shift();
  }
  return str;
}

function currentLine(line) {
  if (line.length === 0) {
    var str = "The line is currently empty.";
  } else {
    str = "The line is currently: "
    for (var i = 0, l = line.length; i < l; i++) {
      str += `${i + 1}. ${line[i]}, `; 
    }
    str = str.slice(0, -2);
  }
  return str;
}

