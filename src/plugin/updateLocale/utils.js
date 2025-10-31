export default function extend(...objects) {
  const extended = {}
  // Merge the object into the extended object
  const merge = function (obj) {
    Object.keys(obj).forEach((key) => {
      if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
        // If we're doing a deep merge and the property is an object
        extended[key] = extend(extended[key], obj[key])
      } else {
        // Otherwise, do a regular merge
        extended[key] = obj[key]
      }
    })
  }

  objects.forEach((object) => {
    merge(object)
  })

  return extended
}
