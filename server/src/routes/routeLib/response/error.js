import { NO_CONNECTION, DUPLICATE, EXPIRED_ACCESS_TOKEN } from './responseCode'

/**
 * Validation Mismatch - 인자 값이 유효하지 않음
 *
 * @param key
 * @param message
 */
export const validationMismatch = (key, message, code) => {
  throw new Map([
    ['statusCode', 400],
    ['message', message],
    ['code', code],
    ['data', key]
  ])
}

/**
 * Duplicate Data - 중복되는 정보
 *
 * @param key
 */
export const duplicate = key => {
  throw new Map([
    ['statusCode', 400],
    ['message', 'Duplicate Data'],
    ['code', DUPLICATE],
    ['data', key]
  ])
}

/**
 * Credential Mismatch - 인증정보가 일치하지 않음
 */
export const credentialsMismatch = _ => {
  throw new Map([
    ['statusCode', 401],
    ['message', 'Credential Mismatch']
  ])
}

/**
 * No Connection - 유저 접속기록이 없음
 */
export const noConnection = _ => {
  throw new Map([
    ['statusCode', 401],
    ['message', 'No Connection'],
    ['code', NO_CONNECTION]
  ])
}

/**
 * Expired accessToken - 인증이 만료된 accessToken
 */
export const expiredToken = _ => {
  throw new Map([
    ['statusCode', 401],
    ['message', 'Expired Access Token'],
    ['code', EXPIRED_ACCESS_TOKEN]
  ])
}

export default {
  validationMismatch, duplicate, credentialsMismatch, noConnection, expiredToken
}
