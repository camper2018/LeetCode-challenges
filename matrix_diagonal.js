let matrix = [[1,2,3,0,55],
              [4,5,6,0,10],
              [6,7,8,0,15],
              [1,1,2,1,20],
              [1,2,3,4,50]
 ];
// prints values diagonally with alternating direction between left-to-right and right-to-left
function printMatrixDiagonally(matrix) {
  let r = 0;
  let c = 1;
  let result = [matrix[0][0]];// [1]
  let goUp = false;
  let goDown = true;
  //while length of result < items in matrix and we have not exceeded the last item i.e not beyond matrix[4][4]
  while(result.length < matrix.length * matrix[0].length ) {
    // if c is not < 0 and r is < 4
    while(c >= 0 && r < matrix.length) {
      result.push(matrix[r][c]);
      // if we have not reached the last item in the matrix i.e matrix[4][4] then continue looping otherwise stop and return result
      if (r !== matrix.length -1 || c !== matrix[0].length -1){
        r++;
        c--;
      } else {
        return result;
      }
    }
    // if c < 0 and or r > matrix length, we need to switch direction to up
    goUp = true;
    goDown = false;
    // if going up :
    if (goUp) {
      // if c < 0 and r > matrix length
      if (r >=matrix.length && c < 0){
        r--;
        c+=2;
      }
      // if c < 0
      if (c < 0 ) {
        c++;
      }
      // if r > matrix length
      if (r >= matrix.length) {
        r--;
        c+=2;
      }
    }
    // As we are going up check if we don't exceed the upper-right limit:
    //while c < matrix[0. length and r is >= 0
    while(c < matrix[0].length && r >= 0) {
      result.push(matrix[r][c]);
      // if we have not reached the last item in the matrix i.e matrix[4][4] then continue looping otherwise stop and return result
      if (r !== matrix.length - 1 || c !== matrix[0].length -1){
        c++;
        r--;
      } else {
        return result;
      }

    }
    // As c and or r are out of bound, switch direction to down
    goUp = false;
    goDown = true;
    // going down , bring the indces one step back to the previos place and then go down and left
    if(goDown) {
      if (r < 0 && c >= matrix[0].length) {
        r+=2;
        c--;
      }
      if (r < 0) {
        r++;
      }
      if (c >=matrix[0].length){
        c--;
        r+=2;
      }
    }
  }
  return result;
}
printMatrixDiagonally(matrix)
