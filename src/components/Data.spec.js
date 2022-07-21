import Data from './Data.js'
describe('Data', () => {
    it('should render without crashing', () => {
      const el = Data();
      expect(el ).toContain('Bulbasaur');
      
    });
  });
  
  // describe('App', () => {
  //   it('should render without crashing', () => {
  //     const el = App();
  //     expect(el instanceof HTMLElement).toBe(true);
  //   });
  // });
  describe('Data', () => {
    const traerData = Data(Data);
     it('should render without crashing', () => {
     expect(traerData instanceof HTMLElement).toBe(true);
    });
    //pintar 9 cartas
    it("Pintar 9 cartas de img", () => {
      let ejecutar = traerData.querySelectorAll('img');
      expect(ejecutar.length).toBe(1);
    })
  });
  // Shuffle sea una función 
    describe('shuffle', () => {
    it('should be a function', () => {
    expect(typeof shuffle).toBe('function');
  });
});