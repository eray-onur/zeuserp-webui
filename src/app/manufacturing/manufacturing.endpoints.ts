export const endpoints = {
    root: 'localhost:44345/api',
    bomEndpoints: {
        get: 'BillOfMaterials/Get',
        getAsync: 'BillOfMaterials/GetAsync',
        getAll: 'BillOfMaterials/GetAll',
        getAllAsync: 'BillOfMaterials/GetAllAsync',
        getBomDetailsDto: 'BillOfMaterials/GetDetails',
        getBomDetailsDtoAsync: 'Bom/GetDetailsAsync',
        getBomListDto: 'BillOfMaterials/GetList',
        getBomListDtoAsync: 'BillOfMaterials/GetListAsync',
        add: 'BillOfMaterials/Add',
        addAsync: 'BillOfMaterials/AddAsync',
        update: 'BillOfMaterials/Update',
        updateAsync: 'Bom/UpdateAsync',
        delete: 'BillOfMaterials/Delete',
        deleteAsync: 'BillOfMaterials/DeleteAsync',
        componentGet: 'BomComponents/Get',
        componentGetAsync: 'BomComponents/GetAsync',
        componentGetAll: 'Bom/Components/GetAll',
        componentGetAllAsync: 'BomComponents/GetAllAsync',
        componentDetails: 'BomComponents/GetDetails',
        componentDetailsAsync: 'BomComponents/GetDetailsAsync',
        componentAdd: 'BomComponents/Add',
        componentAddAsync: 'BomComponents/AddAsync',
        componentUpdate: 'BomComponents/Update',
        componentUpdateAsync: 'BomComponents/UpdateAsync',
        componentDelete: 'BomComponents/Delete',
        componentDeleteAsync: 'BomComponents/DeleteAsync',
    },
    unbuildEndpoints: {
        get: 'UnbuildOrders/Get',
        getAsync: 'UnbuildOrders/GetAsync',
        getAll: 'UnbuildOrders/GetAll',
        getAllAsync: 'UnbuildOrders/GetAllAsync',
        getUnbuildOrdersDetailsDto: 'UnbuildOrders/GetDetails',
        getUnbuildOrdersDetailsDtoAsync: 'UnbuildOrders/GetDetailsAsync',
        getUnbuildOrdersListDto: 'UnbuildOrders/GetList',
        getUnbuildOrdersListDtoAsync: 'UnbuildOrders/GetListAsync',
        add: 'UnbuildOrders/Add',
        addAsync: 'UnbuildOrders/AddAsync',
        update: 'UnbuildOrders/Update',
        updateAsync: 'UnbuildOrders/UpdateAsync',
        delete: 'UnbuildOrders/Delete',
        deleteAsync: 'UnbuildOrders/DeleteAsync',
    },
    manufacturingEndpoints: {
        get: 'ManufacturingOrders/Get',
        getAsync: 'ManufacturingOrders/GetAsync',
        getAll: 'ManufacturingOrders/GetAll',
        getAllAsync: 'ManufacturingOrders/GetAllAsync',
        getManufacturingOrdersDetailsDto: 'ManufacturingOrders/GetDetails',
        getManufacturingOrdersDetailsDtoAsync: 'ManufacturingOrders/GetDetailsAsync',
        getManufacturingOrdersListDto: 'ManufacturingOrders/GetList',
        getManufacturingOrdersListDtoAsync: 'ManufacturingOrders/GetListAsync',
        add: 'ManufacturingOrders/Add',
        addAsync: 'ManufacturingOrders/AddAsync',
        update: 'ManufacturingOrders/Update',
        updateAsync: 'ManufacturingOrders/UpdateAsync',
        delete: 'ManufacturingOrders/Delete',
        deleteAsync: 'ManufacturingOrders/DeleteAsync',
    },
};
