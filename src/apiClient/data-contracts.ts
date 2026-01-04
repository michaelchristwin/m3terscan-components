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

/**
 * Activities
 * Docstring for Activities
 */
export interface Activities {
  /** Timestamp */
  timestamp: number;
  /** Energy */
  energy: number;
  /** Signature */
  signature: string;
}

/**
 * ActivitiesResponse
 * Docstring for ActivitiesResponse
 */
export interface ActivitiesResponse {
  /** Data */
  data: Activities[];
  /** Limit */
  limit: number;
  /** Next Cursor */
  next_cursor: string;
}

/**
 * DailyResponse
 * Response model for daily enpoint.
 */
export interface DailyResponse {
  /** Hour Start Utc */
  hour_start_utc: string;
  /** Total Energy */
  total_energy: number;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/**
 * MonthOfYearResponse
 * Response model to get a specified month of a specified year.
 */
export interface MonthOfYearResponse {
  /** Day */
  day: number;
  /** Total Energy */
  total_energy: number;
}

/**
 * ProposalsResponse
 * Represents the structured response containing a meter number,
 * a formatted account ID, and a nonce value.
 */
export interface ProposalsResponse {
  /** M3Ter No */
  m3ter_no: number;
  /** Account */
  account: string;
  /** Nonce */
  nonce: number;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/**
 * WeeklyResponse
 * Response model for weekly enpoint.
 */
export interface WeeklyResponse {
  /** Day Of Week */
  day_of_week: number;
  /** Total Energy */
  total_energy: number;
}

/**
 * WeeksOfYearResponse
 * Response model to get weeks of a year.
 */
export interface WeeksOfYearResponse {
  /** Week */
  week: number;
  /** Total Energy */
  total_energy: number;
}
