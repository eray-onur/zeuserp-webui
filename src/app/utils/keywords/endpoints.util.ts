export const endpoints = {
    rootEndpoint: 'https://192.168.1.88:5001/api',
    productEndpoints: {
        get: '/Product/Get',
        getProductDetailsDto: '/Product/GetDetails',
        getList: '/Product/GetList',
        getProductListDto: '/Product/GetExtendedList',
        getProductListDtoAsync: '/Product/GetExtendedListAsync',
        add: '/Product/Add',
        update: '/Product/Update',
        delete: '/Product/Delete',
    },
    categoryEndpoints: {
        getAll: '/Category/GetAll',
        get: '/Category/Get',
        add: '/Product/Add',
        update: '/Product/Update',
        delete: '/Product/Delete',
    },
    warehouseEndpoints: {
        getAll: '/Warehouse/GetAll',
        get: '/Warehouse/Get',
        add: '/Warehouse/Add',
        update: '/Warehouse/Update',
        delete: '/Warehouse/Delete',
    },
    orderEndpoints: {
        
    }
}