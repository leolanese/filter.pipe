/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe.ts';

describe(`Testing Pipe Filter:`, () => {
  let pipe;
  
  beforeEachProviders(() => [
    FilterPipe
  ]);
  
  beforeEach(inject([FilterPipe], p => {
    pipe = p;
  }));
  
  it(`Should throw if not used with a string:`, () => {
    expect(()=>pipe.transform(null)).toThrow();
    expect(()=>pipe.transform(undefined)).toThrow();
    expect(()=>pipe.transform()).toThrow();
    expect(()=>pipe.transform()).toThrowError('Requires a String as input');
    expect(()=>pipe.transform()).toThrowError(BaseException);
    expect(()=>pipe.transform()).toThrowError(BaseException, 'Requires a String as input');
  });
  
  it(`should work with empty string`, () => {
    expect(pipe.transform('')).toEqual('');
  });
  
}) 
