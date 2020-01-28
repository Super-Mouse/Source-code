function toTree(arr) {
  let temp = {}
  let obj = {}
  for (const item of arr) {
    temp[item.id] = item
  }
  for (const key in temp) {
    if (temp.hasOwnProperty(key)) {
      if (temp[key].pid) {
        if(!obj[temp[key].pid].children){
          obj[temp[key].pid].children = {}
        }
        obj[temp[key].pid].children[temp[key].id] = temp[key]
      } else {
        obj[temp[key].id] = temp[key]
      }
    }
  }
  return obj
} 
