// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  let result = {};

  for (let i=0; i<keys.length; i++)
    result[keys[i]] = i < values.length ? values[i] : null;

  return result;
}