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

import {
  type ActivitiesResponse,
  type DailyResponse,
  type HTTPValidationError,
  type MonthOfYearResponse,
  type WeeklyResponse,
  type WeeksOfYearResponse,
} from "./data-contracts";
import { HttpClient, type RequestParams } from "./http-client";

export class M3Ter<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get daily energy usage aggregate.
   *
   * @name GetDailyM3TerM3TerIdDailyGet
   * @summary Get Daily
   * @request GET:/m3ter/{m3ter_id}/daily
   */
  getDailyM3TerM3TerIdDailyGet = (
    m3TerId: number,
    params: RequestParams = {}
  ) =>
    this.request<DailyResponse[], HTTPValidationError>({
      path: `/m3ter/${m3TerId}/daily`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get weekly energy usage aggregate.
   *
   * @name GetWeeklyM3TerM3TerIdWeeklyGet
   * @summary Get Weekly
   * @request GET:/m3ter/{m3ter_id}/weekly
   */
  getWeeklyM3TerM3TerIdWeeklyGet = (
    m3TerId: number,
    params: RequestParams = {}
  ) =>
    this.request<WeeklyResponse[], HTTPValidationError>({
      path: `/m3ter/${m3TerId}/weekly`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get energy usage of all weeks of specified year.
   *
   * @name GetWeeksOfYearM3TerM3TerIdWeeksYearGet
   * @summary Get Weeks Of Year
   * @request GET:/m3ter/{m3ter_id}/weeks/{year}
   */
  getWeeksOfYearM3TerM3TerIdWeeksYearGet = (
    m3TerId: number,
    year: number,
    params: RequestParams = {}
  ) =>
    this.request<WeeksOfYearResponse[], HTTPValidationError>({
      path: `/m3ter/${m3TerId}/weeks/${year}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get energy usage of a month in a specified year using pagination and timestamp filtering.
   *
   * @name GetMonthOfYearM3TerM3TerIdMonthYearMonthGet
   * @summary Get Month Of Year
   * @request GET:/m3ter/{m3ter_id}/month/{year}/{month}
   */
  getMonthOfYearM3TerM3TerIdMonthYearMonthGet = (
    m3TerId: number,
    year: number,
    month: number,
    params: RequestParams = {}
  ) =>
    this.request<MonthOfYearResponse[], HTTPValidationError>({
      path: `/m3ter/${m3TerId}/month/${year}/${month}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Get activities of a m3ter :param m3ter_id: Description :type m3ter_id: int
   *
   * @name GetActivitiesM3TerM3TerIdActivitiesGet
   * @summary Get Activities
   * @request GET:/m3ter/{m3ter_id}/activities
   */
  getActivitiesM3TerM3TerIdActivitiesGet = (
    m3TerId: number,
    query?: {
      /** After */
      after?: string | null;
      /**
       * Limit
       * @default 10
       */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<ActivitiesResponse, HTTPValidationError>({
      path: `/m3ter/${m3TerId}/activities`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
