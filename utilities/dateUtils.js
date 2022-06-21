/* eslint-disable no-unused-vars */
const getDataInDDMMYY = (date) => {
  return `0${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const getMonthInWords = (point) => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${point.getDate()}-${monthNames[point.getMonth()]}-${point.getFullYear().toString().substr(-2)}`;
};

const getMonthInWordsMMYY = (point) => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[point.getMonth()]}-${point.getFullYear().toString().substr(-2)}`;
};

const getUTCTimeStamp = () => {
  const now = new Date();
  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds(),
  );
};

const getUTCTimeStampWithoutTime = () => {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0);
};

const getUTCTimeStampFromDate = (date) => {
  return Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds(),
  );
};

const getUTCTimeStampFromDateWithoutTime = (date) => {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0);
};

const getMonthDigit = (month) => {
  switch (month) {
    case 'Jan':
      return '01';
    case 'Feb':
      return '02';
    case 'Mar':
      return '03';
    case 'Apr':
      return '04';
    case 'May':
      return '05';
    case 'Jun':
      return '06';
    case 'Jul':
      return '07';
    case 'Aug':
      return '08';
    case 'Sep':
      return '09';
    case 'Oct':
      return '10';
    case 'Nov':
      return '11';
    case 'Dec':
      return '12';
    default:
      return null;
  }
};

const getMonthName = (month) => {
  switch (month) {
    case '1':
    case '01':
    case 1:
      return 'January';
    case '2':
    case '02':
    case 2:
      return 'February';
    case '03':
    case '3':
    case 3:
      return 'March';
    case '04':
    case '4':
    case 4:
      return 'April';
    case '05':
    case '5':
    case 5:
      return 'May';
    case '06':
    case '6':
    case 6:
      return 'June';
    case '07':
    case '7':
    case 7:
      return 'July';
    case '08':
    case '8':
    case 8:
      return 'August';
    case '09':
    case '9':
    case 9:
      return 'September';
    case '10':
    case 10:
      return 'October';
    case '11':
    case 11:
      return 'November';
    case '12':
    case 12:
      return 'December';
    default:
      return null;
  }
};

const daysBetween = (date1, date2) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const getMonthDays = (month) => {
  switch (String(month)) {
    case 'Jan':
    case '1':
    case '01':
      return 31;
    case 'Feb':
    case '2':
    case '02':
      return 29;
    case 'Mar':
    case '3':
    case '03':
      return 31;
    case 'Apr':
    case '4':
    case '04':
      return 30;
    case 'May':
    case '5':
    case '05':
      return 31;
    case 'Jun':
    case '6':
    case '06':
      return 30;
    case 'Jul':
    case '7':
    case '07':
      return 31;
    case 'Aug':
    case '8':
    case '08':
      return 31;
    case 'Sep':
    case '9':
    case '09':
      return 30;
    case 'Oct':
    case '10':
      return 31;
    case 'Nov':
    case '11':
      return 30;
    case 'Dec':
    case '12':
      return 31;
    default:
      return null;
  }
};

const compareDate = (date1, date2) => {
  return new Date(date2) > new Date(date1);
};

const make2digit = (digit) => {
  return String(digit).padStart(2, '0');
};

const getCurrentDate = () => {
  return String(
    `${new Date().getFullYear()}-${this.make2digit(new Date().getMonth() + 1)}-${this.make2digit(
      new Date().getDate(),
    )}`,
  );
};

const getNextDate = () => {
  let outDate = new Date();
  outDate = new Date(outDate.setDate(outDate.getDate() + 1));
  outDate = `${outDate.getFullYear()}-${this.make2digit(outDate.getMonth() + 1)}-${this.make2digit(outDate.getDate())}`;
  return outDate;
};

const getPreviousDate = () => {
  let outDate = new Date();
  outDate = new Date(outDate.setDate(outDate.getDate() - 1));
  outDate = `${outDate.getFullYear()}-${this.make2digit(outDate.getMonth() + 1)}-${this.make2digit(outDate.getDate())}`;
  return outDate;
};

const getCurrentDateInDDMMYY = (separator) => {
  if (separator === undefined) {
    separator = '-';
  }
  return String(
    this.make2digit(new Date().getDate()) +
      separator +
      this.make2digit(new Date().getMonth() + 1) +
      separator +
      new Date().getFullYear(),
  );
};

const getCurrentDateInMMDDYY = (separator) => {
  if (separator === undefined) {
    separator = '-';
  }
  return String(
    new Date().getFullYear() +
      separator +
      this.make2digit(new Date().getMonth() + 1) +
      separator +
      this.make2digit(new Date().getDate()),
  );
};

const convertTo24Hour = (time) => {
  const hours = +time.substr(0, 2);
  if (time.indexOf('am') !== -1 && hours === 12) {
    time = time.replace('12', '0');
  }
  if (time.indexOf('pm') !== -1 && hours < 12) {
    time = time.replace(hours, hours + 12);
  }
  return time.replace(/(am|pm)/, '');
};

const formatAMPM = (date) => {
  let hours = date.getHours();
  const minutes = this.make2digit(date.getMinutes());
  const AmPm = hours >= 12 ? 'pm' : 'am';
  hours = this.make2digit(hours % 12 || 12); // the hour '0' should be '12'
  return `${hours}:${minutes} ${AmPm}`;
};

const getFilteredDates = (days, dates) => {
  const filteredDates = [];
  if (days.length === 0) {
    return [];
  }

  dates.forEach((date) => {
    if (days.indexOf(new Date(date).getDay()) > -1) {
      filteredDates.push(date);
    }
  });

  return filteredDates;
};

const getFilteredDatesFromObject = (days, dates, keyName) => {
  const filteredDates = [];
  if (days.length === 0) {
    return [];
  }

  dates.forEach((date) => {
    if (days.indexOf(new Date(date[keyName]).getDay().toString()) > -1) {
      filteredDates.push(date);
    }
  });

  return filteredDates;
};

const getDate = (requiredDate, format, separator) => {
  if (separator === undefined) {
    separator = '-';
  }
  if (format === undefined) {
    format = 'y,m,d';
  }
  format = format.replace(/ /g, '');
  const date = requiredDate;
  if (date === undefined) {
    // can happen if the date is not there in the database and
    // we are directly calling this without checking for null
    return date;
  }

  switch (format) {
    case 'd,m,y':
      return (
        this.make2digit(date.getDate()) +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
    case 'm,d,y':
      return (
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate()) +
        separator +
        date.getFullYear()
      );
    case 'y,m,d':
      return (
        date.getFullYear() +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate())
      );
    case 'YY,MM,DD':
      return (
        date.getFullYear().toString().substr(2, 2) +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate())
      );
    case 'YYYY,MM,DD':
      return (
        date.getFullYear() +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate())
      );
    default:
      return (
        this.make2digit(date.getDate()) +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
  }
};

const getUtcDate = (requiredDate, format, separator) => {
  if (separator === undefined) {
    separator = '-';
  }
  if (format === undefined) {
    format = 'y,m,d';
  }
  format = format.replace(/ /g, '');
  const date = requiredDate;

  switch (format) {
    case 'd,m,y':
      return (
        this.make2digit(+date.getDate()) +
        separator +
        this.make2digit(+date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
    case 'm,d,y':
      return (
        this.make2digit(+date.getMonth() + 1) +
        separator +
        this.make2digit(+date.getUTCDate()) +
        separator +
        date.getFullYear()
      );
    case 'y,m,d':
      return (
        date.getFullYear() +
        separator +
        this.make2digit(+date.getMonth() + 1) +
        separator +
        this.make2digit(+date.getDate())
      );
    case 'YY,MM,DD':
      return (
        date.getFullYear().toString().substr(2, 2) +
        separator +
        this.make2digit(+date.getMonth() + 1) +
        separator +
        this.make2digit(+date.getDate())
      );
    default:
      return (
        this.make2digit(+date.getDate()) +
        separator +
        this.make2digit(+date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
  }
};

const incrementDateBy = (count, requiredDate, format, separator) => {
  if (separator === undefined) {
    separator = '-';
  }
  if (format === undefined) {
    format = 'y,m,d';
  }
  format = format.replace(/ /g, '');
  let date = requiredDate;
  date = new Date(date.setDate(date.getDate() + count));

  switch (format) {
    case 'd,m,y':
      return (
        this.make2digit(date.getDate()) +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
    case 'm,d,y':
      return (
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate()) +
        separator +
        date.getFullYear()
      );
    case 'y,m,d':
      return (
        date.getFullYear() +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate())
      );
    default:
      return (
        this.make2digit(date.getDate()) +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
  }
};

const decrementDateBy = (count, requiredDate, format, separator) => {
  if (separator === undefined) {
    separator = '-';
  }
  if (format === undefined) {
    format = 'y,m,d';
  }
  format = format.replace(/ /g, '');
  let date = requiredDate;
  date = new Date(date.setDate(date.getDate() - count));

  switch (format) {
    case 'd,m,y':
      return (
        this.make2digit(date.getDate()) +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
    case 'm,d,y':
      return (
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate()) +
        separator +
        date.getFullYear()
      );
    case 'y,m,d':
      return (
        date.getFullYear() +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        this.make2digit(date.getDate())
      );
    default:
      return (
        this.make2digit(date.getDate()) +
        separator +
        this.make2digit(date.getMonth() + 1) +
        separator +
        date.getFullYear()
      );
  }
};

const addDays = (date, days) => {
  const dat = new Date(date);
  dat.setDate(dat.getDate() + days);
  return dat;
};

const validateDate = (dateValue) => {
  return !Number.isNaN(new Date(dateValue).getTime());
};

const getDates = (startDate, stopDate) => {
  try {
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      const formattedDate = `${currentDate.getFullYear()}-${this.make2digit(
        +currentDate.getMonth() + 1,
      )}-${this.make2digit(currentDate.getDate())}`;
      dateArray.push(formattedDate);
      currentDate = this.addDays(1);
    }
    return dateArray;
  } catch (e) {
    return global.logger.log(e);
  }
};

const convertISODateStringToUTCDate = (effectiveDate) => {
  const utc = new Date(effectiveDate.toUTCString());
  let month = this.getMonthName(utc.getMonth() + 1);
  month = month.slice(0, 3);
  const hour = utc.getHours() === 0 ? 12 : utc.getHours() > 12 ? utc.getHours() - 12 : utc.getHours();
  const min = utc.getMinutes() < 10 ? `0${utc.getMinutes()}` : utc.getMinutes();
  const sec = utc.getSeconds() < 10 ? `0${utc.getSeconds()}` : utc.getSeconds();
  const AmPm = utc.getHours() < 12 ? 'AM' : 'PM';
  const time = `${hour}:${min}:${sec} ${AmPm}`;
  const date = utc.getDate() < 10 ? `0${utc.getDate()}` : utc.getDate();
  const dateTime = `${month} ${date}, ${utc.getFullYear()} ${time}`;
  return dateTime;
};

module.exports = {
  getDataInDDMMYY,
  getMonthInWords,
  getMonthInWordsMMYY,
  getUTCTimeStamp,
  getUTCTimeStampWithoutTime,
  getUTCTimeStampFromDate,
  getUTCTimeStampFromDateWithoutTime,
  getMonthDigit,
  getMonthName,
  daysBetween,
  getMonthDays,
  compareDate,
  make2digit,
  getCurrentDate,
  getNextDate,
  getPreviousDate,
  getCurrentDateInDDMMYY,
  getCurrentDateInMMDDYY,
  convertTo24Hour,
  formatAMPM,
  getFilteredDates,
  getFilteredDatesFromObject,
  getDate,
  getUtcDate,
  incrementDateBy,
  decrementDateBy,
  addDays,
  validateDate,
  getDates,
  convertISODateStringToUTCDate,
};
