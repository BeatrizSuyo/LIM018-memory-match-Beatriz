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
    it("Pintar 9 etiquetas de img", () => {
      let ejecutar = traerData.querySelectorAll('img');
      expect(ejecutar.length).toBe(1);
    })
  });