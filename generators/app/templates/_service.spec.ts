// import {Service} from 'tsmvc';
// import {ServiceManager} from '../../services/serviceManager';
// import {<%=model.name%>} from '../../models/<%=model.name%>';
// import {<%=model.name%>Service} from '../../services/<%=model.name%>Service';
//
// describe('<%=model.name%>Service', () =>{
//
//   var mockID: string = 'testMockID';
//   var service;
//
//   beforeEach(() => {
//       ServiceManager.initialize();
//       service = ServiceManager.<%=model.name%>Service;
//   })
//
//   it('should be resolved', () =>{
//     expect(service.<%=model.name%>DataLayer).toBeDefined();
//   });
//
//   describe('find', () => {
//     it('should call dataLayer', ()=>{
//       spyOn(service.<%=model.name%>DataLayer, 'find');
//       service.find(mockID);
//       expect(service.<%=model.name%>DataLayer.find).toHaveBeenCalledWith(mockID);
//     });
//   });
//
//   describe('findAll', () => {
//     it('should call dataLayer', ()=>{
//       spyOn(service.<%=model.name%>DataLayer, 'findAll');
//       service.findAll();
//       expect(service.<%=model.name%>DataLayer.findAll).toHaveBeenCalled();
//     });
//   });
//
//   describe('findAllWith', () => {
//     it('should call dataLayer', ()=>{
//       spyOn(service.<%=model.name%>DataLayer, 'findAllWith');
//       service.findAllWith(mockID);
//       expect(service.<%=model.name%>DataLayer.findAllWith).toHaveBeenCalledWith(mockID);
//     });
//   });
//
//   describe('addItem', () => {
//     it('should call dataLayer', ()=>{
//       spyOn(service.<%=model.name%>DataLayer, 'addItem');
//       service.addItem(mockID);
//       expect(service.<%=model.name%>DataLayer.addItem).toHaveBeenCalledWith(mockID);
//     });
//   });
//
//
//   describe('removeItem', () => {
//     it('should call dataLayer', ()=>{
//       spyOn(service.<%=model.name%>DataLayer, 'removeItem');
//       service.removeItem(mockID);
//       expect(service.<%=model.name%>DataLayer.removeItem).toHaveBeenCalledWith(mockID);
//     });
//   });
//
//   describe('saveItem', () => {
//     it('should call dataLayer', ()=>{
//       spyOn(service.<%=model.name%>DataLayer, 'saveItem');
//
//       var model = new <%=model.name%>();
//
//       service.saveItem(model, mockID);
//       expect(service.<%=model.name%>DataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
//     });
//   });
//
//   // Custom methods:
//   // describe('getAccount', () => {
//   //   it('should call dataLayer', ()=>{
//   //     spyOn(service.<%=model.name%>DataLayer, 'getAccount');
//   //
//   //     var model = new <%=model.name%>();
//   //
//   //     service.getAccount(model);
//   //     expect(service.<%=model.name%>DataLayer.saveItem).toHaveBeenCalledWith(model, mockID);
//   //   });
//   // });
//
// });
