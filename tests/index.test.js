const { months, monthsAbbr, days, daysAbbr, D } = require('../src/index');

describe('Date Library Utility Tests', () => {
  let instance;

  beforeEach(() => {
    instance = new D('2023-09-06T12:34:56Z');
  });

  test('months array should have correct month names', () => {
    expect(months).toEqual([
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]);
  });

  test('abbreviated months array should have correct abbreviated month names', () => {
    expect(monthsAbbr).toEqual([
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]);
  });

  test('days array should have correct day names', () => {
    expect(days).toEqual([
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]);
  });

  test('abbreviated days array should have correct abbreviated day names', () => {
    expect(daysAbbr).toEqual([
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ]);
  });

  describe('Constructor', () => {
    test('should create a new instance of D with the specified date', () => {
      const date = new D(2023, 0, 1);
      expect(date).toBeInstanceOf(D);
    });
  });

  describe('Getters', () => {
    test('.year should return the correct year', () => {
      expect(instance.year).toBe(2023);
    });

    test('.yr should return the correct abbreviated year', () => {
      expect(instance.yr).toBe(23);
    });

    test('.month should return the correct month', () => {
      expect(instance.month).toBe('September');
    });

    test('.mon should return the correct abbreviated month', () => {
      expect(instance.mon).toBe('Sep');
    });

    test('.day should return the correct day', () => {
      expect(instance.day).toBe('Wednesday');
    });

    test('.dy should return the correct abbreviated day', () => {
      expect(instance.dy).toBe('Wed');
    });

    test('.date should return the correct numerical day value of the date instance', () => {
      expect(instance.date).toBe(6);
    });

    test('.hours should return the correct hour of the date instance', () => {
      const date = new D(2023, 0, 1, 15, 30);
      expect(date.hours).toBe(15);
    });

    test('.mins should return the correct minute value of the date instance', () => {
      expect(instance.mins).toBe(34);
    });

    test('.secs should return the correct value of the date instance', () => {
      expect(instance.secs).toBe(56);
    });
  });

  describe('Format', () => {
    test('should format the date with the default mask', () => {
      const date = new D(2023, 0, 1);
      expect(date.format()).toBe('2023 January 01');
    });

    test('should format the date with a custom mask', () => {
      const date = new D(2023, 0, 1);
      expect(date.format('Y/m/D')).toBe('2023/Jan/01');
    });

    test('should format the date with a custom mask including minutes and seconds', () => {
      const date = new D(2023, 0, 1, 15, 30, 45);
      expect(date.format('Y-m-D H:I:S')).toBe('2023-Jan-01 15:30:45');
    });

    test('should format the date with a custom mask including day abbreviation', () => {
      const date = new D(2023, 0, 1);
      expect(date.format('Y-m-d, w')).toBe('2023-Jan-1, Sun');
    });
  });

  describe('When', () => {
    test('.when should return just now if the date instance given is current time', () => {
      jest.spyOn(global, 'Date').mockImplementationOnce(() =>
        new Date('2023-09-06T12:34:56Z')
      );
      instance = new D('2023-09-06T12:34:56Z');

      expect(instance.when()).toBe('just now');
    });
  });
});