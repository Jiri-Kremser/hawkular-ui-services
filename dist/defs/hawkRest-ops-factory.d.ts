export interface ICommonResponse {
    message: string;
    status: string;
    resourcePath: string;
}
export interface IExecutionOperationResponse extends ICommonResponse {
    operationName: string;
}
export interface IDeployApplicationResponse extends ICommonResponse {
    destinationFileName: string;
}
export interface IAddJdbcDriverResponse {
    status: string;
    resourcePath: string;
    message?: string;
}
export interface IRemoveJdbcDriverResponse {
    resourcePath: string;
    destinationSessionId: string;
    status: string;
    message?: string;
}
export interface IExportJdrResponse {
    status: string;
    resourcePath: string;
    fileName?: string;
    message?: string;
}
export interface IAddDatasourceResponse {
    status: string;
    resourcePath: string;
    message?: string;
}
export interface IUpdateDatasourceResponse {
    status: string;
    resourcePath: string;
    message?: string;
}
export interface IRemoveDatasourceResponse {
    resourcePath: string;
    destinationSessionId: string;
    status: string;
    message?: string;
}
export interface IGenericErrorResponse {
    errorMessage: string;
    stackTrace: string;
}
export interface IWebSocketResponseHandler {
    prefix: string;
    handle: (any, binaryData?: Blob) => void;
}
