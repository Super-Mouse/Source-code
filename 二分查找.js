// 1 3 4 5 6 7 8 9
let $2search = function (arr, val) {
  const len = arr.length
  if (arr[0]>val || arr[len-1]<val) {
    return false
  }
  if (len===2 && arr[0] !==val && arr[1]!==val) {
    return false
  }
  let $2 = Math.floor(len/2)
  if (arr[$2]>val) {
    return $2search(arr.slice(0, $2), val)
  } else if (arr[$2]<val) {
    return $2search(arr.slice($2 + 1), val)
  } else{
    return true
  }
} 