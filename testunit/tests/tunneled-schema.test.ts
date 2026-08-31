import { test, expect } from 'vitest'
import { IsGFPSchedule, IsNaverWaterfall } from '@userscript/tunneled-schema.js'

test('IsGFPSchedule returns true for valid GFPSchedule', () => {
  const Sample = {
    'head': {
      'version': '0.0.1',
      'description': 'GFP Video Ad Schedule'
    },
    'requestId': 'vas-f4b799bf-8840-4e15-bc76-5cc7aa6ecb99',
    'videoAdScheduleId': 'LIVE_CHZZK_NDP_SCH',
    'adBreaks': [
      {
        'id': 'PREROLL-0',
        'startDelay': 0,
        'preFetch': 0,
        'adUnitId': 'w_live_chzzk_naver_va',
        'adSources': [
          {
            'id': 'PREROLL-0-0',
            'withRemindAd': 0
          }
        ]
      }
    ]
  }
  
  expect(IsGFPSchedule(JSON.stringify(Sample))).toBeTruthy()
})

test('IsGFPSchedule returns false for valid GFPSchedule at LCK VOD', () => {
  const Sample = {
    'head': {
      'version': '0.0.1',
      'description': 'GFP Video Ad Schedule'
    },
    'requestId': 'vas-a4f01b5c-dde0-478b-8a54-9cffbf881b95',
    'videoAdScheduleId': 'CHZZK_NDP_SCH',
    'adBreaks': [
      {
        'id': 'PREROLL-0',
        'startDelay': 0,
        'preFetch': 0,
        'adUnitId': 'w_chzzk_naver_va',
        'adSources': [
          {
            'id': 'PREROLL-0-0',
            'withRemindAd': 0
          }
        ]
      },
      {
        'id': 'MIDROLL-0',
        'startDelay': 1800,
        'preFetch': 10,
        'adUnitId': 'w_chzzk_naver_va_mid',
        'adSources': [
          {
            'id': 'MIDROLL-0-0',
            'withRemindAd': 0
          }
        ]
      }
    ]
  }

  expect(IsGFPSchedule(JSON.stringify(Sample))).toBeTruthy()
})

test('IsNaverWaterfall returns true for valid NaverWaterfall Preroll', () => {
  const Sample = {
    'requestId': '2ca52d7d5d8311a8612178ad3e59b215',
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
    'randomNumber': 27,
    'adDivId': 'live_player_layout',
    'videoSkipMin': 5,
    'videoSkipAfter': 5,
    'ads': [
      {
        'encrypted': 'owZay7HrV7MH4H2KQSEcfAnMZN9LdK5j',
        'connectionType': 'C2S',
        'adProviderType': 'OUTSIDE',
        'adProviderName': 'Google IMA',
        'adUrl': 'https://example.com/ad',
        'layoutType': 'PIXEL',
        'creativeType': 'VIDEO',
        'renderType': 'GOOGLE_IMA',
        'eventTracking': {
          'ackImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
            },
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
            }
          ],
          'attached': [],
          'activeViewImpressions': [],
          'renderedImpressions': [],
          'viewableImpressions': [],
          'clicks': [],
          'vimp1px': [],
          'vimp100': [],
          'vimp100p': [],
          'admute': [],
          'advmute': [],
          'like': [],
          'unlike': [],
          'close': [],
          'bounce': [],
          'priv': []
        },
        'adInfo': {
          'timeout': 10000,
          'requestSizes': [
            {
              'height': 720,
              'width': 1280
            }
          ],
          'sdkRequestInfo': {
            'AD_UNIT_CODE': 'WEB_CHZZK_VIDEO',
            'NETWORK_CODE': '9923935929942',
            'env': 'vp',
            'gdfp_req': '1',
            'output': 'vast',
            'unviewed_position_start': '1'
          }
        }
      },
      {
        'encrypted': 'wF3rAPh7RR7ZfP3N7kwKcPwiQHHpfHDY',
        'connectionType': 'S2S',
        'adProviderName': 'GFP',
        'adUrl': 'https://example.com/ad',
        'layoutType': 'PIXEL',
        'creativeType': 'VIDEO',
        'renderType': 'EMPTY',
        'eventTracking': {
          'ackImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp'
            },
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp'
            }
          ],
          'attached': [],
          'activeViewImpressions': [],
          'renderedImpressions': [],
          'viewableImpressions': [],
          'clicks': [],
          'vimp1px': [],
          'vimp100': [],
          'vimp100p': [],
          'admute': [],
          'advmute': [],
          'like': [],
          'unlike': [],
          'close': [],
          'bounce': [],
          'priv': []
        },
        'adInfo': {
          'responseSize': {
            'height': 0,
            'width': 0
          }
        }
      }
    ]
  }

  expect(IsNaverWaterfall(JSON.stringify(Sample))).toBeTruthy()
})


test('IsNaverWaterfall returns true for valid NaverWaterfall Midroll', () => {
  const SampleXML = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<VAST version="3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd">\n'
    + '  <Ad id="3449225">\n'
    + '    <InLine>\n'
    + '      <AdSystem>NAVER DA</AdSystem>\n'
    + '      <AdTitle>Naver Video DA</AdTitle>\n'
    + '      <Impression><![CDATA[https://siape.veta.naver.com/fxview?]]></Impression>\n'
    + '      <Creatives>\n'
    + '        <Creative>\n'
    + '          <CreativeExtensions>\n'
    + '            <CreativeExtension name="NDA.loudnessNormalization" type="application/json">\n'
    + '              <![CDATA[{"name":"loudnessNormalization","enable":true,"version":"1.1.4","contentEncoding":"BASE64_SAFE","contentType":"application/octet-stream","data":"QJFTZMEHFUKFYLFXCHE9C3WKYUE7WTRN_TWHN5ZTDR2DSN3PNWT24T4FAZ23LR7UL_____","properties":{"targetLoudness":-16.0,"mode":"youtube-like"}}]]>\n'
    + '            </CreativeExtension>\n'
    + '          </CreativeExtensions>\n'
    + '          <Linear skipoffset="00:00:15">\n'
    + '            <Duration>00:00:30.038</Duration>\n'
    + '            <TrackingEvents>\n'
    + '              <Tracking event="start"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '              <Tracking event="firstQuartile"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '              <Tracking event="midpoint"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '              <Tracking event="thirdQuartile"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '              <Tracking event="complete"><![CDATA[https://siape.veta.naver.com/fxview?]]></Tracking>\n'
    + '              <Tracking event="skip"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '              <Tracking event="progress" offset="00:00:15"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '              <Tracking event="progress" offset="00:00:02"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '              <Tracking event="progress" offset="00:00:03"><![CDATA[https://siape.veta.naver.com/fxview?]]></Tracking>\n'
    + '              <Tracking event="progress" offset="00:00:10"><![CDATA[https://siape.veta.naver.com/fxview?]]></Tracking>\n'
    + '              <Tracking event="progress" offset="00:00:30"><![CDATA[https://siape.veta.naver.com/fxview]]></Tracking>\n'
    + '            </TrackingEvents>\n'
    + '            <VideoClicks><ClickThrough><![CDATA[https://siape.veta.naver.com/fxclick]]></ClickThrough></VideoClicks>\n'
    + '            <MediaFiles>\n'
    + '              <MediaFile id="8216256" delivery="progressive" type="video/mp4" bitrate="2000" width="1280" height="720"><![CDATA[https://tvetamovie.pstatic.net/libs/1577/1577053/ba43e49ad9333493e_202608220104100002.mp4-pMAIN-v-12-f272199-2422297237333235.mp4]]></MediaFile>\n'
    + '            </MediaFiles>\n'
    + '          </Linear>\n'
    + '        </Creative>\n'
    + '      </Creatives>\n'
    + '    </InLine>\n'
    + '  </Ad>\n'
    + '</VAST>'
  const Sample = {
    'requestId': '9624045ff41e4ae7bf1ff6a698ae3c8a',
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
    'adUnit': 'w_live_chzzk_naver_va_mid',
    'randomNumber': 96,
    'adDivId': 'midAdPlayerWrapper',
    'videoSkipMin': 5,
    'videoSkipAfter': 5,
    'ads': [
      {
        'encrypted': 'MbHE7djmsMYN7gPLP3t9zLZJxC4CFXQU',
        'connectionType': 'S2S',
        'adProviderType': 'IN_NAVER',
        'adProviderName': 'NDP Video',
        'adUrl': 'https://example.com/ad',
        'layoutType': 'PIXEL',
        'creativeType': 'VIDEO',
        'renderType': 'GV',
        'eventTracking': {
          'ackImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nurl?'
            }
          ],
          'attached': [],
          'activeViewImpressions': [],
          'renderedImpressions': [],
          'viewableImpressions': [],
          'clicks': [],
          'vimp1px': [],
          'vimp100': [],
          'vimp100p': [],
          'admute': [],
          'advmute': [],
          'like': [],
          'unlike': [],
          'close': [],
          'bounce': [],
          'priv': []
        },
        'adInfo': {
          'placeId': 'a5e7bc52753fafa5df',
          'cid': '3933239',
          'crid': '74377',
          'exp': 86470,
          'adContext': '{\'id\':\'3f39f9aabc4eefdd49a22ec4a2ed2d97\',\'impId\':\'BR0_I3\',\'adProviderName\':\'NDP Video\',\'adProviderGroupCd\':\'NDP\',\'cid\':[\'1578053\'],\'crid\':[\'2872125\'],\'creativeType\':\'VIDEO\',\'cur\':\'KRW\',\'price\':\'pfExWpisfLY2dTxrUb=\',\'catType\':\'NCAT\',\'cat\':[\'104\',\'1044121\']}',
          'adm': SampleXML,
          'encoded': 0,
          'responseSize': {
            'height': 371,
            'width': 660
          }
        },
        'vastSkippable': true,
        'vastMaxRedirect': 1
      },
      {
        'encrypted': 'MbHE7djmsMYN7gPLP3t9zLZJxC4CFXQU',
        'connectionType': 'S2S',
        'adProviderName': 'GFP',
        'adUrl': 'https://example.com/ad',
        'layoutType': 'PIXEL',
        'creativeType': 'VIDEO',
        'renderType': 'EMPTY',
        'eventTracking': {
          'ackImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?'
            }
          ],
          'attached': [],
          'activeViewImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbimp?'
            }
          ],
          'renderedImpressions': [],
          'viewableImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbimp'
            }
          ],
          'clicks': [],
          'vimp1px': [],
          'vimp100': [],
          'vimp100p': [],
          'admute': [],
          'advmute': [],
          'like': [],
          'unlike': [],
          'close': [],
          'bounce': [],
          'priv': []
        },
        'adInfo': {
          'responseSize': {
            'height': 0,
            'width': 0
          }
        }
      }
    ]
  }

  expect(IsNaverWaterfall(JSON.stringify(Sample))).toBeTruthy()
})

test('IsNaverWaterfall returns true for valid NaverWaterfall at LCK VOD', () => {
  const Sample = {
    'requestId': 'ea2dcb2bfd7d4349d9cc79cbcb44f995',
    'head': {
      'version': '0.0.1',
      'description': 'Naver SSP Waterfall List'
    },
    'eventTracking': {
      'ackImpressions': [
        {
          'url': 'https://tivan.naver.com/sc2/1/'
        }
      ],
      'activeViewImpressions': [
        {
          'url': 'https://tivan.naver.com/sc2/2/'
        }
      ],
      'clicks': [
        {
          'url': 'https://tivan.naver.com/sc2/3/'
        }
      ],
      'completions': [
        {
          'url': 'https://tivan.naver.com/sc2/4/'
        }
      ],
      'attached': [
        {
          'url': 'https://tivan.naver.com/sc2/10/'
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
    'adUnit': 'w_chzzk_naver_va',
    'randomNumber': 5,
    'adDivId': 'player_layout',
    'videoSkipMin': 5,
    'videoSkipAfter': 5,
    'ads': [
      {
        'encrypted': 'ktAdH2W3oegAWenFiKVvJsWggnqSRZXSsNLpvaZsKmkup',
        'connectionType': 'C2S',
        'adProviderType': 'OUTSIDE',
        'adProviderName': 'Google IMA',
        'layoutType': 'PIXEL',
        'creativeType': 'VIDEO',
        'renderType': 'GOOGLE_IMA',
        'eventTracking': {
          'ackImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?eu='
            },
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?eu='
            },
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?eu='
            }
          ],
          'attached': [],
          'activeViewImpressions': [],
          'renderedImpressions': [],
          'viewableImpressions': [],
          'clicks': [],
          'vimp1px': [],
          'vimp100': [],
          'vimp100p': [],
          'admute': [],
          'advmute': [],
          'like': [],
          'unlike': [],
          'close': [],
          'bounce': [],
          'priv': []
        },
        'adInfo': {
          'timeout': 10000,
          'requestSizes': [
            {
              'height': 720,
              'width': 1280
            }
          ],
          'sdkRequestInfo': {
            'AD_UNIT_CODE': 'WEB_CHZZK_VIDEO',
            'NETWORK_CODE': '217445452505',
            'env': 'vp',
            'gdfp_req': '1',
            'output': 'vast',
            'unviewed_position_start': '1'
          }
        }
      },
      {
        'encrypted': '9s2Y9tVUKir4eNzh45eaWyRrXHLFF9U4UJsMiNeoVCPHP',
        'connectionType': 'S2S',
        'adProviderName': 'GFP',
        'layoutType': 'PIXEL',
        'creativeType': 'VIDEO',
        'renderType': 'EMPTY',
        'eventTracking': {
          'ackImpressions': [
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?eu='
            },
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?eu='
            },
            {
              'url': 'https://siape.veta.naver.com/openrtb/nbackimp?eu='
            }
          ],
          'attached': [],
          'activeViewImpressions': [],
          'renderedImpressions': [],
          'viewableImpressions': [],
          'clicks': [],
          'vimp1px': [],
          'vimp100': [],
          'vimp100p': [],
          'admute': [],
          'advmute': [],
          'like': [],
          'unlike': [],
          'close': [],
          'bounce': [],
          'priv': []
        },
        'adInfo': {
          'responseSize': {
            'height': 0,
            'width': 0
          }
        }
      }
    ]
  }

  expect(IsNaverWaterfall(JSON.stringify(Sample))).toBeTruthy()
})