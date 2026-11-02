/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const used = {};
  return names.map((name) => {
    let result = name;
    if (used[name]) {
      let k = used[name];
      while (used[`${name}(${k})`]) k += 1;
      used[name] = k + 1;
      result = `${name}(${k})`;
    }
    used[result] = (used[result] || 0) + 1;
    return result;
  });
}

module.exports = {
  renameFiles
};
