/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/instancePoolsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a InstancePools. */
export class InstancePools {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a InstancePools.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstancePoolsGetResponse>
   */
  get(resourceGroupName: string, instancePoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.InstancePoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, instancePoolName: string, callback: msRest.ServiceCallback<Models.InstancePool>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, instancePoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstancePool>): void;
  get(resourceGroupName: string, instancePoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstancePool>, callback?: msRest.ServiceCallback<Models.InstancePool>): Promise<Models.InstancePoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        instancePoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InstancePoolsGetResponse>;
  }

  /**
   * Creates or updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be created or updated.
   * @param parameters The requested instance pool resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstancePoolsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, instancePoolName: string, parameters: Models.InstancePool, options?: msRest.RequestOptionsBase): Promise<Models.InstancePoolsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,instancePoolName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InstancePoolsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an instance pool
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be deleted
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, instancePoolName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,instancePoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be updated.
   * @param parameters The requested instance pool resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstancePoolsUpdateResponse>
   */
  update(resourceGroupName: string, instancePoolName: string, parameters: Models.InstancePoolUpdate, options?: msRest.RequestOptionsBase): Promise<Models.InstancePoolsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,instancePoolName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InstancePoolsUpdateResponse>;
  }

  /**
   * Gets a list of instance pools in the resource group
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstancePoolsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.InstancePoolsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstancePoolListResult>, callback?: msRest.ServiceCallback<Models.InstancePoolListResult>): Promise<Models.InstancePoolsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.InstancePoolsListByResourceGroupResponse>;
  }

  /**
   * Gets a list of all instance pools in the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstancePoolsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.InstancePoolsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstancePoolListResult>, callback?: msRest.ServiceCallback<Models.InstancePoolListResult>): Promise<Models.InstancePoolsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.InstancePoolsListResponse>;
  }

  /**
   * Creates or updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be created or updated.
   * @param parameters The requested instance pool resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, instancePoolName: string, parameters: Models.InstancePool, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        instancePoolName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an instance pool
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be deleted
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, instancePoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        instancePoolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be updated.
   * @param parameters The requested instance pool resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, instancePoolName: string, parameters: Models.InstancePoolUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        instancePoolName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Gets a list of instance pools in the resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstancePoolsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InstancePoolsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstancePoolListResult>, callback?: msRest.ServiceCallback<Models.InstancePoolListResult>): Promise<Models.InstancePoolsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.InstancePoolsListByResourceGroupNextResponse>;
  }

  /**
   * Gets a list of all instance pools in the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstancePoolsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InstancePoolsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstancePoolListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstancePoolListResult>, callback?: msRest.ServiceCallback<Models.InstancePoolListResult>): Promise<Models.InstancePoolsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.InstancePoolsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.instancePoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstancePool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Sql/instancePools",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.instancePoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.InstancePool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.InstancePool
    },
    201: {
      bodyMapper: Mappers.InstancePool
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.instancePoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.instancePoolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.InstancePoolUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.InstancePool
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstancePoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};