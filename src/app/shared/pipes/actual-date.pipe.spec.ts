import { ActualDatePipe } from './actual-date.pipe';

describe('ActualDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ActualDatePipe('shortDate');
    expect(pipe).toBeTruthy();
  });
});
