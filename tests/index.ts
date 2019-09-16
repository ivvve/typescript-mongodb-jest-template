import jest from 'jest';

process.env.NODE_ENV = 'test';

const argv = process.argv.slice(2);

jest.run(argv);