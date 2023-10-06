/**
 * An array containing the full names of months.
 * @type {string[]}
 */
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  /**
   * An array containing the abbreviated names of months.
   * @type {string[]}
   */
  
  const monthsAbbr = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  /**
   * An array containing the full names of days of the week.
   * @type {string[]}
   */
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  
  /**
   * An array containing the abbreviated names of days of the week.
   * @type {string[]}
   */
  const daysAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Create a class that holds a Date object as a property.
  console.log('--------- Challenge 1 --------')
  /**
   * A class that holds a Date object as a property and provides various getters and methods for date manipulation and formatting.
   */
  class D {
    /**
     * Constructor for the D class.
     * @param {...any} args - Arguments to be passed to the Date constructor.
     */
    constructor(...args) {
      this._date = new Date(...args);
    };
  
    // Getters
    /**
     * Get the full year of the date.
     * @type {number}
     */
    get year() {
      return this._date.getFullYear();
    };
  
    /**
     * Get the last two digits of the year.
     * @type {number}
     */
    get yr() {
      return this._date.getFullYear() % 100;
    };
  
    /**
   * Get the full name of the month.
   * @type {string}
   */
    get month() {
      return months[this._date.getMonth()];
    };
  
    /**
     * Get the abbreviated name of the month.
     * @type {string}
     */
    get mon() {
      return monthsAbbr[this._date.getMonth()];
    };
  
    /**
   * Get the full name of the day of the week.
   * @type {string}
   */
    get day() {
      return days[this._date.getDay()];
    };
  
    /**
   * Get the abbreviated name of the day of the week.
   * @type {string}
   */
    get dy() {
      return daysAbbr[this._date.getDay()];
    };
  
    /**
   * Get the day of the month.
   * @type {number}
   */
    get date() {
      return this._date.getDate();
    };
  
    /**
   * Get the hours component of the date.
   * @type {number}
   */
    get hours() {
      return this._date.getHours();
    };
  
    /**
   * Get the minutes component of the date.
   * @type {number}
   */
    get mins() {
      return this._date.getMinutes();
    };
  
    /**
   * Get the seconds component of the date.
   * @type {number}
   */
    get secs() {
      return this._date.getSeconds();
    };
  
    /**
     * Format the date using a specified mask.
     * @param {string} [mask='Y M D'] - The mask string for formatting.
     * @returns {string} - The formatted date string.
     */
    format(mask = 'Y M D') {
      const formatOptions = {
        'Y': this.year,
        'y': this.year.toString().slice(-2),
        'M': this.month,
        'm': this.mon,
        'D': this.date.toString().padStart(2, '0'),
        'd': this.date,
        '#': this.getDateWithOrdinal(),
        'H': this.hours.toString().padStart(2, '0'),
        'h': this.hours,
        'I': this.mins.toString().padStart(2, '0'),
        'i': this.mins,
        'S': this.secs.toString().padStart(2, '0'),
        's': this.secs,
        'W': this.dayOfWeekFull(),
        'w': this.dayOfWeekShort(),
      };
  
      const formattedDate = mask.replace(/./g, (char) => {
        return formatOptions[char] !== undefined ? formatOptions[char] : char;
      });
  
      return formattedDate;
    };
  
    /**
     * Get the full name of the day of the week.
     * @returns {string} - The full name of the day of the week.
     */
    dayOfWeekFull() {
      const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ];
      return days[this._date.getDay()];
    };
  
    /**
     * Get the abbreviated name of the day of the week.
     * @returns {string} - The abbreviated name of the day of the week.
     */
    dayOfWeekShort() {
      const daysAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysAbbr[this._date.getDay()];
    };
  
    /**
     * Get the date with an ordinal suffix (e.g., 1st, 2nd, 3rd, 4th).
     * @returns {string} - The date with the ordinal suffix.
     */
    getDateWithOrdinal() {
      const date = this.date;
      const suffixes = ['st', 'nd', 'rd', 'th'];
      const relevantDigits = (date < 30) ? date % 20 : date % 30;
      const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits - 1] : suffixes[3];
      return `${date}${suffix}`;
    };
  
    /**
   * Determine the relative time difference between the current date and this date.
   * @returns {string} - A string indicating the relative time difference.
   */
    when() {
      const currentDate = new Date();
      const thisDate = new Date(this._date);
      const timeDifference = thisDate - currentDate;
      const absTimeDifference = Math.abs(timeDifference);
  
      const oneMinute = 60 * 1000;
      const oneHour = oneMinute * 60;
      const oneDay = oneHour * 24;
      const oneMonth = oneDay * 30;
      const oneYear = oneDay * 365;
  
      console.log('currentDateBeforeCond:', currentDate);
      console.log('this._dateBeforeCond:', this._date);
      console.log('thisDate:', thisDate);
      console.log('timeDifferenceBeforeCond:', timeDifference);
      console.log('absTimeDifferenceBeforeCond:', absTimeDifference);
  
      if (timeDifference < 0) {
        console.log('Time is in the past');
        if (absTimeDifference < oneMinute) {
          console.log('Less than a minute ago');
          return "just now";
        } else if (absTimeDifference < oneHour) {
          console.log('Minutes ago');
          const minutesAgo = Math.floor(absTimeDifference / oneMinute);
          return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
        } else if (absTimeDifference < oneDay) {
          console.log('Hours ago');
          const hoursAgo = Math.floor(absTimeDifference / oneHour);
          return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
        } else if (absTimeDifference < oneMonth) {
          console.log('Days ago');
          const daysAgo = Math.floor(absTimeDifference / oneDay);
          return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
        } else if (absTimeDifference < oneYear) {
          console.log('Months ago');
          const monthsAgo = Math.floor(absTimeDifference / oneMonth);
          return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
        } else {
          console.log('Years ago');
          const yearsAgo = Math.floor(absTimeDifference / oneYear);
          return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`;
        }
      } else if (timeDifference > 0) {
        if (absTimeDifference < oneMinute) {
          console.log('Less than a minute from now');
          return "just now";
        } else if (absTimeDifference < oneHour) {
          console.log('Minutes from now');
          const minutesFromNow = Math.floor(absTimeDifference / oneMinute);
          return `in ${minutesFromNow} ${minutesFromNow === 1 ? 'minute' : 'minutes'}`;
        } else if (absTimeDifference < oneDay) {
          console.log('Hours from now');
          const hoursFromNow = Math.floor(absTimeDifference / oneHour);
          return `in ${hoursFromNow} ${hoursFromNow === 1 ? 'hour' : 'hours'}`;
        } else if (absTimeDifference < oneMonth) {
          console.log('Days from now');
          const daysFromNow = Math.floor(absTimeDifference / oneDay);
          return `in ${daysFromNow} ${daysFromNow === 1 ? 'day' : 'days'}`;
        } else if (absTimeDifference < oneYear) {
          console.log('Months from now');
          const monthsFromNow = Math.floor(absTimeDifference / oneMonth);
          return `in ${monthsFromNow} ${monthsFromNow === 1 ? 'month' : 'months'}`;
        } else {
          console.log('Years from now');
          const yearsFromNow = Math.floor(absTimeDifference / oneYear);
          return `in ${yearsFromNow} ${yearsFromNow === 1 ? 'year' : 'years'}`;
        }
      } else {
        console.log('Current time');
        return "just now";
      }
    };
  
  };
  
  const no_param_date = new D();
  const date_with_string = new D('July 1, 1999');
  const date_with_params = new D(2001, 9, 11, 9, 30);
  const date_with_date = new D(new Date());
  
  console.log('no_param_date: ', no_param_date._date);
  console.log('date_with_string: ', date_with_string._date);
  console.log('date_with_params: ', date_with_params._date);
  console.log('date_with_date: ', date_with_date._date);
  
  // Provide human readable vaules for the Date object.
  console.log('--------- Challenge 2 --------')
  
  const challengeTwoDate = new D();
  console.log('Get the year: ', challengeTwoDate.year);
  console.log('Get the yr: ', challengeTwoDate.yr);
  console.log('Get the month: ', challengeTwoDate.month);
  console.log('Get the mon: ', challengeTwoDate.mon);
  console.log('Get the day: ', challengeTwoDate.day);
  console.log('Get the dy: ', challengeTwoDate.dy);
  console.log('Get the date: ', challengeTwoDate.date);
  console.log('Get the hour: ', challengeTwoDate.hours);
  console.log('Get the minute: ', challengeTwoDate.mins);
  console.log('Get the second: ', challengeTwoDate.secs);
  
  // Create a format method that takes a "mask" string. 
  // The mask will contain formatting characters which displays various date elements
  console.log('--------- Challenge 3 --------')
  
  const d = new D(2017, 0, 2, 3, 4, 5);
  console.log(d.format());
  console.log(d.format('y/m/d'));
  console.log(d.format('H:I:S'));
  console.log(d.format('h:i:s'));
  console.log(d.format('Y-M-D h:I:S'));
  
  const da = new D(2023, 8, 30); // September 30, 2023 is a Saturday
  
  console.log(da.format('W'));  // Output: Saturday
  console.log(da.format('w'));  // Output: Sat
  console.log(da.format('Y-M-D w'));  // Output: 2023-September-30 Sat
  
  // Create a when() method that takes a date and returns a human readable string of 'when' that date will occur.
  console.log('--------- Challenge 4 --------')
  const d1 = new D(2019, 0, 2, 3, 4, 5);
  console.log(d1.when());
  
  const d2 = new D(2019, 9, 2, 3, 4, 5);
  console.log(d2.when());
  
  const d3 = new D(2024, 9, 2, 3, 4, 5);
  console.log(d3.when());
  
  const d4 = new D(2019, 6, 30, 3, 4, 5);
  console.log(d4.when());
  
  const d5 = new D();
  console.log(d5.when());
  
  module.exports = {
    months,
    monthsAbbr,
    days,
    daysAbbr,
    D
  };