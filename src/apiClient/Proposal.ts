/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { HTTPValidationError, ProposalsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Proposal<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve proposal details by transaction hash. First checks the database cache. If not found, fetches from Ethereum blockchain, decodes the transaction data, and caches the results. :param tx_hash: Ethereum transaction hash :type tx_hash: str :return: List of proposal meter readings
   *
   * @name GetProposalProposalTxHashGet
   * @summary Get Proposal
   * @request GET:/proposal/{tx_hash}
   */
  getProposalProposalTxHashGet = (txHash: string, params: RequestParams = {}) =>
    this.request<ProposalsResponse[], HTTPValidationError>({
      path: `/proposal/${txHash}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
