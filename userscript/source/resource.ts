import { GenerateHex } from './random.js'

export function GFPScheduleBlock() {
  return {
    'head': {
      'version': '0.0.1',
      'description': 'GFP Video Ad Schedule'
    },
    'requestId': `vas-${crypto.randomUUID()}`,
    'videoAdScheduleId': 'LIVE_CHZZK_NDP_SCH',
    'adBreaks': [
      {
        'id': '',
        'startDelay': 0,
        'preFetch': 0,
        'adUnitId': '',
        'adSources': []
      }
    ]
  }
}

export function NaverWaterfallBlock() {
  return {
    'requestId': GenerateHex(32),
    'head': {
      'version': '0.0.1',
      'description': 'Naver SSP Waterfall List'
    },
    'eventTracking': {
      'ackImpressions': [
        {
          'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
        }
      ],
      'activeViewImpressions': [
        {
          'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
        }
      ],
      'clicks': [
        {
          'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
        }
      ],
      'completions': [
        {
          'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
        }
      ],
      'attached': [
        {
          'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
        }
      ],
      'renderedImpressions': [
        {
          'url': 'https://tivan.naver.com/sc2/11/'
        }
      ],
      'viewableImpressions': [
        {
          'url': 'https://tivan.naver.com/sc2/12/'
        }
      ],
      'loadErrors': [
        {
          'url': 'https://tivan.naver.com/sc2/91/'
        }
      ],
      'startErrors': [
        {
          'url': 'https://tivan.naver.com/sc2/92/'
        }
      ],
      'lazyRenderMediaFailed': [
        {
          'url': 'https://tivan.naver.com/sc2/93/'
        }
      ],
      'mute': [
        {
          'url': 'https://tivan.naver.com/sc2/5/'
        }
      ],
      'close': [
        {
          'url': 'https://tivan.naver.com/sc2/6/'
        }
      ]
    },
    'adUnit': 'w_live_chzzk_naver_va',
    'randomNumber': GenerateHex(2),
    'adDivId': 'live_player_layout',
    'videoSkipMin': 5,
    'videoSkipAfter': 5,
    'ads': []
    }
}

export interface SeoraksanEndpoint {
  // oxlint-disable-next-line crackle/pascal-case
  code: number
  // oxlint-disable-next-line crackle/pascal-case
  content: {
    // oxlint-disable-next-line crackle/pascal-case
    playerAdDisplayResponse: {
      // oxlint-disable-next-line crackle/pascal-case
      preRoll: boolean
      // oxlint-disable-next-line crackle/pascal-case
      midRoll: boolean
      // oxlint-disable-next-line crackle/pascal-case
      postRoll: boolean
    }
    // oxlint-disable-next-line crackle/pascal-case
    livePlaybackJson: unknown
  }
}

export function SeoraksanEndpointBlock(Data: SeoraksanEndpoint) {
  Data.content.playerAdDisplayResponse.preRoll = false
  Data.content.playerAdDisplayResponse.midRoll = false
  return Data
}