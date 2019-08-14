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
import * as Models from "../models";
import * as Mappers from "../models/collectionPartitionRegionMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a CollectionPartitionRegion. */
export class CollectionPartitionRegion {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a CollectionPartitionRegion.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given collection and region, split
   * by partition.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param [options] The optional parameters
   * @returns Promise<Models.CollectionPartitionRegionListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.CollectionPartitionRegionListMetricsResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, filter: string, callback: msRest.ServiceCallback<Models.PartitionMetricListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartitionMetricListResult>): void;
  listMetrics(resourceGroupName: string, accountName: string, region: string, databaseRid: string, collectionRid: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartitionMetricListResult>, callback?: msRest.ServiceCallback<Models.PartitionMetricListResult>): Promise<Models.CollectionPartitionRegionListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        region,
        databaseRid,
        collectionRid,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.CollectionPartitionRegionListMetricsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.region,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartitionMetricListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};