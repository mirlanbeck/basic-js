/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  let month;
  try {
    // Date.prototype methods throw on objects without the internal [[DateValue]] slot
    if (Number.isNaN(Date.prototype.getTime.call(date))) throw new Error();
    month = Date.prototype.getMonth.call(date);
  } catch {
    throw new Error('Invalid date!');
  }
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  return seasons[Math.floor(((month + 1) % 12) / 3)];
}

module.exports = {
  getSeason
};
