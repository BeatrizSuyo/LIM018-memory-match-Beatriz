import Data from './Data.js'
describe('Data', () => {
    it('should render without crashing', () => {
      const el = Data();
      expect(el ).toContain('Bulbasaur');
      
    });
  });
  