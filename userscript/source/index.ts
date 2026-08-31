/*!
 * @license MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Contributors:
 *   - See Git history at https://github.com/FilteringDev/crackle for detailed authorship information.
 */

// BUILD:START

type unsafeWindow = typeof window
// oxlint-disable-next-line crackle/pascal-case
declare const unsafeWindow: unsafeWindow

// oxlint-disable-next-line crackle/pascal-case
declare const EASYLIST_GENERIC_HIDE_SELECTORS: string[]

const Win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window
const UserscriptName = 'Crackle'

import { OriginalUint8Array } from './intrinsics.js'
import { IsGFPSchedule, IsNaverWaterfall, IsSeoraksanEndpoint } from './tunneled-schema.js'
import { GFPScheduleBlock, NaverWaterfallBlock, type SeoraksanEndpoint, SeoraksanEndpointBlock } from './resource.js'
import { InstallXHRStatusMock, type XHRStatusMockRule } from './xhr-status-mock.js'
import { UnionArrays } from './arrrayext.js'
import { IsArrayBuffer, IsTypedArray, StartsWithBytes, type Uint8ArrayConstructorParameters } from './uint8array-utils.js'
export { OriginalUint8Array }

const StartWithBytesPrefix = new TextEncoder().encode('{"')

Win.Uint8Array = new Proxy(Win.Uint8Array, {
  construct(Target: typeof Uint8Array, Args: Uint8ArrayConstructorParameters) {
    if (!Args.length || typeof Args[0] === 'number') {
      return Reflect.construct(Target, Args)
    }
    if (!(IsTypedArray(Args[0]) || IsArrayBuffer(Args[0])) || !StartsWithBytes(new OriginalUint8Array(Args[0]), StartWithBytesPrefix)) {
      return Reflect.construct(Target, Args)
    }
    try {
      let TextDecoderInstance = new TextDecoder('utf-8', { fatal: true }).decode(Reflect.construct(Target, Args))
      let Msg = new OriginalUint8Array()
      switch (true) {
        case IsGFPSchedule(TextDecoderInstance):
          Msg = new TextEncoder().encode(JSON.stringify(GFPScheduleBlock()))
          console.debug(`[${UserscriptName}] Replaced GPF Schedule with a mock block`)
          // oxlint-disable-next-line typescript/no-unsafe-return 
          return Reflect.construct(Target, [Msg])
        case IsNaverWaterfall(TextDecoderInstance):
          Msg = new TextEncoder().encode(JSON.stringify(NaverWaterfallBlock()))
          console.debug(`[${UserscriptName}] Replaced Naver Waterfall with a mock block`)
          // oxlint-disable-next-line typescript/no-unsafe-return 
          return Reflect.construct(Target, [Msg])
        case IsSeoraksanEndpoint(TextDecoderInstance):
          Msg = new TextEncoder().encode(JSON.stringify(SeoraksanEndpointBlock(JSON.parse(TextDecoderInstance) as SeoraksanEndpoint)))
          console.debug(`[${UserscriptName}] Detected Seoraksan endpoint request with playerAdDisplayResponse`)
          // oxlint-disable-next-line typescript/no-unsafe-return 
          return Reflect.construct(Target, [Msg])

        default:
          return Reflect.construct(Target, Args)
      }
    } catch {
      return Reflect.construct(Target, Args)
    }
  }
})

// CSS Style Properties Monkeying
const MonkeyedHTMLElement: WeakMap<CSSStyleProperties, boolean> = new WeakMap()

Win.getComputedStyle = new Proxy(Win.getComputedStyle, {
  apply(Target: typeof getComputedStyle, ThisArg: undefined, Args: Parameters<typeof getComputedStyle>) {
    const Result = Reflect.apply(Target, ThisArg, Args)
    if (Args[0] instanceof HTMLElement && UnionArrays(EASYLIST_GENERIC_HIDE_SELECTORS, [...Args[0].classList]).length > 0) {
      MonkeyedHTMLElement.set(Result, true)
    } else MonkeyedHTMLElement.set(Result, false)
    return Result
  }
})

Win.CSSStyleDeclaration.prototype.getPropertyValue = new Proxy(Win.CSSStyleDeclaration.prototype.getPropertyValue, {
  apply(Target: typeof Win.CSSStyleDeclaration.prototype.getPropertyValue, ThisArg: CSSStyleDeclaration, Args: Parameters<typeof Win.CSSStyleDeclaration.prototype.getPropertyValue>) {
    if (typeof Args[0] === 'string' && Args[0] === 'display' && MonkeyedHTMLElement.get(ThisArg)) {
      console.debug(`[${UserscriptName}] getPropertyValue('display') called on a monkeyed HTMLElement. Returning 'block' instead of the native value.`)
      return 'block'
    }
    return Reflect.apply(Target, ThisArg, Args)
  }
})

const XHRStatusMockRules: readonly XHRStatusMockRule[] = [{
  Method: 'OPTIONS',
  Url: /^https:\/\/nam\.veta\.naver\.com\//,
  Async: true,
  Status: 200,
  StatusText: 'OK'
}]
InstallXHRStatusMock(Win.XMLHttpRequest, XHRStatusMockRules, UserscriptName)

// BUILD:END
