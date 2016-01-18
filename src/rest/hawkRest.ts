/// Copyright 2014-2015 Red Hat, Inc. and/or its affiliates
/// and other contributors as indicated by the @author tags.
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///   http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.

/// <reference path="../../lib/hawtio-core-dts/angular.d.ts" />
/// <reference path="../../lib/hawtio-core-dts/angular-resource.d.ts" />
/// <reference path="../../node_modules/@reactivex/rxjs/dist/cjs/Rx.d.ts" />

import { ICommonResponse, IExecutionOperationResponse, IDeployApplicationResponse, IAddJdbcDriverResponse,
  IRemoveJdbcDriverResponse, IExportJdrResponse, IAddDatasourceResponse, IUpdateDatasourceResponse,
  IRemoveDatasourceResponse, IGenericErrorResponse, IWebSocketResponseHandler }
  from './hawkRest-ops-factory';

import { IInventoryEntity, IInventoryDataActions, IInventoryResourceActions, IWebSocketHandler, IWebSocketDisposable,
  IEventsActions, IHawkularInventory }
  from './hawkRest-inventory-provider';

const _module = angular.module('hawkular.services', ['ngResource']);

export { _module, ICommonResponse, IExecutionOperationResponse, IDeployApplicationResponse, IAddJdbcDriverResponse,
  IRemoveJdbcDriverResponse, IExportJdrResponse, IAddDatasourceResponse, IUpdateDatasourceResponse,
  IRemoveDatasourceResponse, IGenericErrorResponse, IWebSocketResponseHandler,
  IInventoryEntity, IInventoryDataActions, IInventoryResourceActions, IWebSocketHandler, IWebSocketDisposable,
  IEventsActions, IHawkularInventory };
