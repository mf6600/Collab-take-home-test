const comparecsv = require('./comparecsv')

test('no files', () => {
    expect(comparecsv.compare([])).toBe("Please enter valid input files");
  });

  test('one file', () => {
    expect(comparecsv.compare(['1.csv'])).toBe("Please enter valid input files");
  });

  test('two file', () => {
    expect(comparecsv.compare(['1.csv','2.csv'])).toStrictEqual(["test_4@gmail.com", "test_17@gmail.com", "test_30@gmail.com", "test_31@gmail.com", "test_59@gmail.com"]);
  });

  test('ideal file', () => {
    expect(comparecsv.compare(['samefile1.csv','samefile2.csv'])).toStrictEqual(["test_1@gmail.com", "test_2@gmail.com", "test_3@gmail.com"]);
  });