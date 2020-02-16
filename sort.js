// 冒泡排序
let sort1 = function (arr) {
  const len = arr.length
  for (let i = 0; i < len-1; i++) {
    for (let j = 0; j < len-i-1; j++) {
      let temp = 0
      if (arr[j] > arr[j+1]) {
        temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}


// 插入排序
let sort2 = function (arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let temp = arr[i]
    let j = i
    while (j>0 && (arr[j-1]>=temp)) {
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = temp
  }
  return arr
}