const myArray = {
  toTwenty(i) {
    let result = Array.from(Array(20), (v,i) => i+1);
    if(!i){
    return result;
    } else {
      return result[i];
    }
  },
  toForty(i) {
    let result = Array.from(Array(20), (v,i) => i+1).map(function(i) {
      return i * 2;
    });
    if(!i){
    return result;
    } else {
      return result[i];
    }
  },
  toOneThousand(i) {
    let result = Array.from(Array(100), (v,i) => i+1).map(function(i) {
      return i * 10;
    });
    if(!i){
    return result;
    } else {
      return result[i];
    }
  }
};

module.exports = myArray;