import * as MiniSchema from '@userscript/mini-schema.js'

const UUIDRegExp = /[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}/i
const NaverTrackingUrlRegExp = /^https:\/\/(?:siape\.veta|tivan)\.naver\.com\//

export function IsGFPSchedule(Data: string) {
  return MiniSchema.Schema.Object({
    head: MiniSchema.Schema.Object({
      version: MiniSchema.Schema.String().Refine(V => V === '0.0.1', 'Expected GFPSchedule version 0.0.1'),
      description: MiniSchema.Schema.String().Refine(D => D === 'GFP Video Ad Schedule', 'Expected GFPSchedule description')
    }).Refine(H => !!H, 'Expected GFPSchedule head'),
    requestId: MiniSchema.Schema.String().Refine(R => UUIDRegExp.test(R), 'Expected GFPSchedule requestId'),
    videoAdScheduleId: MiniSchema.Schema.String().Refine(V => /[A-Z]+_[A-Z]+_[A-Z]+(_[A-Z]+)?/.test(V), 'Expected GFPSchedule videoAdScheduleId'),
    adBreaks: MiniSchema.Schema.Array(MiniSchema.Schema.Object({
      id: MiniSchema.Schema.String().Refine(I => /[A-Z]+-[0-9]+/.test(I), 'Expected GFPSchedule adBreaks.id'),
      startDelay: MiniSchema.Schema.Number().Refine(S => S >= 0, 'Expected GFPSchedule adBreaks.startDelay'),
      preFetch: MiniSchema.Schema.Number().Refine(P => P >= 0, 'Expected GFPSchedule adBreaks.preFetch'),
      adUnitId: MiniSchema.Schema.String().Refine(A => /[a-z_]+/.test(A), 'Expected GFPSchedule adBreaks.adUnitId'),
      adSources: MiniSchema.Schema.Array(MiniSchema.Schema.Object({
        id: MiniSchema.Schema.String().Refine(I => /[A-Z]+-[0-9]+-[0-9]+/.test(I), 'Expected GFPSchedule adBreaks.adSources.id'),
        withRemindAd: MiniSchema.Schema.Number().Refine(W => W === 0 || W === 1, 'Expected GFPSchedule adBreaks.adSources.withRemindAd')
      })).Refine(A => A.length > 0, 'Expected GFPSchedule adBreaks.adSources to have at least one element')
    })).Refine(A => A.length > 0, 'Expected GFPSchedule adBreaks to have at least one element')
  }).SafeParse(JSON.parse(Data)).Success
}

export function IsNaverWaterfall(Data: string) {
  return MiniSchema.Schema.LooseObject({
    requestId: MiniSchema.Schema.String().Refine(R => /[a-f0-9]{32}/.test(R), 'Expected NaverWaterfall requestId'),
    head: MiniSchema.Schema.StrictObject({
      version: MiniSchema.Schema.String().Refine(V => V === '0.0.1', 'Expected NaverWaterfall version 0.0.1'),
      description: MiniSchema.Schema.String().Refine(D => D === 'Naver SSP Waterfall List', 'Expected NaverWaterfall description')
    }).Refine(H => !!H, 'Expected NaverWaterfall head'),
    eventTracking: MiniSchema.Schema.LooseObject({
      ackImpressions: MiniSchema.Schema.Array(MiniSchema.Schema.Object({
        url: MiniSchema.Schema.String().Refine(U => NaverTrackingUrlRegExp.test(U), 'Expected NaverWaterfall eventTracking.ackImpressions.url to be a Naver tracking URL')
      })).Refine(A => A.length > 0, 'Expected NaverWaterfall eventTracking.ackImpressions to have at least one element'),
      activeViewImpressions: MiniSchema.Schema.Array(MiniSchema.Schema.Object({
        url: MiniSchema.Schema.String().Refine(U => NaverTrackingUrlRegExp.test(U), 'Expected NaverWaterfall eventTracking.activeViewImpressions.url to be a Naver tracking URL')
      })).Refine(A => A.length > 0, 'Expected NaverWaterfall eventTracking.activeViewImpressions to have at least one element'),
      clicks: MiniSchema.Schema.Array(MiniSchema.Schema.Object({
        url: MiniSchema.Schema.String().Refine(U => NaverTrackingUrlRegExp.test(U), 'Expected NaverWaterfall eventTracking.clicks.url to be a Naver tracking URL')
      })).Refine(A => A.length > 0, 'Expected NaverWaterfall eventTracking.clicks to have at least one element'),
      completions: MiniSchema.Schema.Array(MiniSchema.Schema.Object({
        url: MiniSchema.Schema.String().Refine(U => NaverTrackingUrlRegExp.test(U), 'Expected NaverWaterfall eventTracking.completions.url to be a Naver tracking URL')
      })).Refine(A => A.length > 0, 'Expected NaverWaterfall eventTracking.completions to have at least one element'),
      attached: MiniSchema.Schema.Array(MiniSchema.Schema.Object({
        url: MiniSchema.Schema.String().Refine(U => NaverTrackingUrlRegExp.test(U), 'Expected NaverWaterfall eventTracking.attached.url to be a Naver tracking URL')
      })).Refine(A => A.length > 0, 'Expected NaverWaterfall eventTracking.attached to have at least one element')
    }).Refine(E => !!E, 'Expected NaverWaterfall eventTracking'),
    adUnit: MiniSchema.Schema.String().Refine(A => !!A, 'Expected NaverWaterfall adUnit'),
    adDivId: MiniSchema.Schema.String().Refine(A => !!A, 'Expected NaverWaterfall adDivId'),
    ads: MiniSchema.Schema.Array(MiniSchema.Schema.LooseObject({
      encrypted: MiniSchema.Schema.String().Refine(A => !!A, 'Expected NaverWaterfall ads.encrypted'),
      adProviderName: MiniSchema.Schema.String().Refine(A => !!A, 'Expected NaverWaterfall ads.adProviderName'),
      adUrl: MiniSchema.Schema.String().Refine(A => !!A, 'Expected NaverWaterfall ads.adUrl').Optional()
    })).Refine(A => A.length > 0, 'Expected NaverWaterfall ads to have at least one element')
  }).SafeParse(JSON.parse(Data)).Success
}

export function IsSeoraksanEndpoint(Data: string): boolean {
  return MiniSchema.Schema.LooseObject({
    code: MiniSchema.Schema.Number().Refine(C => C === 200, 'Expected SeoraksanEndpoint code to be 200'),
    content: MiniSchema.Schema.LooseObject({
      playerAdDisplayResponse: MiniSchema.Schema.LooseObject({
        preRoll: MiniSchema.Schema.Boolean(),
        midRoll: MiniSchema.Schema.Boolean(),
        postRoll: MiniSchema.Schema.Boolean().Refine(P => P === true, 'Expected SeoraksanEndpoint content.playerAdDisplayResponse.postRoll to be true')
      }).Refine(P => !!P, 'Expected SeoraksanEndpoint content.playerAdDisplayResponse'),
      livePlaybackJson: MiniSchema.Schema.Unknown()
    }).Refine(C => !!C, 'Expected SeoraksanEndpoint content')
  }).SafeParse(JSON.parse(Data)).Success
}