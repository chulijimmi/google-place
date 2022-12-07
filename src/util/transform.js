/**
 * Transform object to object
 * @param {Object} src
 * @param {Array} dst
 * @returns
 */
const obj = (src, dst) => {
  for (const key in dst) {
    if (typeof src[key] !== "undefined") {
      dst[key] = src[key];
    }
  }
  return dst;
};

/**
 * Transform array to object
 * @param {Array} arr
 * @param {Object} dst
 * @returns
 */
const arr = (arr, dst) => {
  let data = [];
  for (const obj of arr) {
    const newObject = { ...transform.obj(obj, dst) };
    data.push(newObject);
  }
  return data;
};

/**
 * Transfer method
 */
const transform = {
  obj,
  arr
};

export default transform;
