function deepCopy(obj) {
  if (typeof obj !=='object' || obj === null) {
    return obj;
  }
  let copyObj =  Array.isArray(obj)?[]:{}
  for (const key in obj) {
    if (object.hasOwnProperty(key)) {
      copyObj[key] = deepCopy(obj[key])
    }
  }
  return copyObj;
}