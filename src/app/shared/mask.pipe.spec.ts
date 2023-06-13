import { MaskPipe } from './mask.pipe';

describe('MaskPipe', () => {
  const pipe = new MaskPipe();
  it('create an instance', () => {
    // const pipe = new MaskPipe();
    expect(pipe).toBeTruthy();
  });

  it('should mask a passed value', () => {
    const passedValue = '1234-5678-9108-654';
    expect(pipe.transform(passedValue)).toEqual('1234-XXXX-XXXX-654');
  });
});
