/// <reference path="../../node_modules/gulp-typescript/node_modules/typescript/lib/lib.es6.d.ts" />
import * as Rx from '@reactivex/rxjs';
export interface IInventoryEntity extends ng.resource.IResource {
    relationships(...args: any[]): any;
}
export interface IInventoryDataActions extends IInventoryEntity {
    getData(...args: any[]): any;
    createData(...args: any[]): any;
    updateData(...args: any[]): any;
    deleteData(...args: any[]): any;
}
export interface IInventoryResourceActions extends IInventoryDataActions {
    getChildren(...args: any[]): any;
    getParents(...args: any[]): any;
    getParent(...args: any[]): any;
    getMetrics(...args: any[]): any;
    updateProperties(...args: any[]): any;
}
export interface IWebSocketHandler {
    onmessage?(json: any): void;
    onopen?(event: any): void;
    onclose?(event: any): void;
    onerror?(event: any): void;
}
export interface IWebSocketDisposable {
    dispose(): void;
}
export interface IEventsActions {
    listen(handler: IWebSocketHandler): IWebSocketDisposable;
}
export interface IHawkularInventory {
    Tenant(...args: any[]): ng.resource.IResource;
    Environment(...args: any[]): IInventoryEntity;
    Feed(...args: any[]): IInventoryEntity;
    Resource(...args: any[]): IInventoryResourceActions;
    ResourceUnderFeed(...args: any[]): IInventoryResourceActions;
    ResourceType(...args: any[]): IInventoryDataActions;
    ResourceTypeUnderFeed(...args: any[]): IInventoryDataActions;
    MetricType(...args: any[]): IInventoryEntity;
    MetricTypeUnderFeed(...args: any[]): IInventoryEntity;
    MetricOfResource(...args: any[]): ng.resource.IResource;
    MetricOfResourceUnderFeed(...args: any[]): ng.resource.IResource;
    MetricTypeOfResourceType(...args: any[]): ng.resource.IResource;
    MetricTypeOfResourceTypeUnderFeed(...args: any[]): ng.resource.IResource;
    ResourceOfType(...args: any[]): ng.resource.IResource;
    ResourceOfTypeUnderFeed(...args: any[]): ng.resource.IResource;
    ResourceRecursiveChildren(...args: any[]): ng.resource.IResource;
    ResourceRecursiveChildrenUnderFeed(...args: any[]): ng.resource.IResource;
    Metric(...args: any[]): IInventoryEntity;
    MetricUnderFeed(...args: any[]): IInventoryEntity;
    Graph(...args: any[]): IInventoryEntity;
    Events(tenantId: string): IWebSocketHandler;
    RxEvents(tenantId: string): Rx.Observable<any>;
}
