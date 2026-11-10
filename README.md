# crackle

네이버 치지직 웹 사이트의 광고 제거 및 안티 애드블록 우회를 위한 유저스크립트입니다.

치지직이 사용하는 GFP Video Ad Schedule 및 Naver SSP Waterfall 광고 응답을 인식해 광고가 없는 호환 응답으로 대체합니다. 터널링된 `/seoraksan` endpoint 응답에서는 프리롤과 미드롤 광고 표시를 비활성화합니다. EasyList 계열의 요소 숨김과 Naver 광고 서버의 OPTIONS 요청에 대응해 안티 애드블록 동작도 보정합니다. 지원하지 않거나 유효하지 않은 형식의 응답은 변경하지 않습니다.


> [!IMPORTANT]
> tinyShield 유저스크립트 유지보수자는 tinyShield 유저스크립트와 함께 아래 애드블록들 중 하나를 사용하실 것을 권장합니다:
> - AdGuard
> - uBlock Origin
>
> 다른 애드블록 지원은 보장되지 않고 요청되어도 거부될 수 있습니다.

## Discord/Telegram로 업데이트 알림 받기

[Discord 봇](https://discord.com/oauth2/authorize?client_id=1543001264776814723) 또는 Telegram `@filteringdev_noti_bot`을 통해 업데이트 알림을 받을 수 있습니다.

## 면책 조항 (Disclaimer)

Crackle Userscript is a free, non-commercial project.
The developer does not receive any economic profit, compensation, or commercial benefit from creating, maintaining, or distributing this userscript.
By installing and using this userscript, you acknowledge and accept all risks associated with its use, including (but not limited to) potential account penalties, restrictions, or other disadvantages that may result from its operation.

Crackle Userscript는 무료 비상업적 프로젝트입니다.
개발자는 이 유저스크립트의 제작, 유지 관리 또는 배포를 통해 어떠한 경제적 이익, 보상 또는 상업적 혜택도 받지 않습니다.
이 유저스크립트를 설치하고 사용함으로써 귀하는 계정 제재, 제한 또는 작동으로 인해 발생할 수 있는 기타 불이익을 포함하되 이에 국한되지 않는 사용과 관련된 모든 위험을 인지하고 수용합니다.


## 설치

유저스크립트 매니저가 필요합니다. 아래 지원 방법 중 하나를 선택해 설치하세요.

### 빠른 시작

아래 URL을 클릭하여 설치하세요.

https://cdn.jsdelivr.net/npm/@filteringdev/crackle@latest/dist/crackle.user.js

### 설치하는 법

Firefox 및 Chromium 기반 브라우저에서는 **Violentmonkey**를, macOS·iOS·iPadOS의 Safari에서는 **wBlock**을 권장합니다. **Tampermonkey는 권장하지 않습니다.**

- [Violentmonkey](https://violentmonkey.github.io/get-it/) (권장) - Firefox 및 Chromium 기반 브라우저 확장
	1. `Dashboard`를 엽니다.
	2. `New` 버튼을 누릅니다.
	3. `Install from URL` 버튼을 누릅니다.
	4. 다음 URL을 입력합니다.

		 ```text
		 https://cdn.jsdelivr.net/npm/@filteringdev/crackle@latest/dist/crackle.user.js
		 ```

	5. `OK` 버튼을 누릅니다.
	6. 유저스크립트 메타데이터를 확인한 뒤 `Confirm installation`을 누릅니다.
	7. 치지직을 열고 있는 탭으로 돌아가 새로고침합니다.

- AdGuard for Windows
	1. [빠른 시작 URL](https://cdn.jsdelivr.net/npm/@filteringdev/crackle@latest/dist/crackle.user.js)을 클릭하여 설치합니다.

- AdGuard for Android
	1. [빠른 시작 URL](https://cdn.jsdelivr.net/npm/@filteringdev/crackle@latest/dist/crackle.user.js)을 클릭하여 설치합니다.

- [wBlock](https://apps.apple.com/app/wblock/id6746388723) (권장) - macOS·iOS·iPadOS Safari

	<details>
	<summary>Safari에서 wBlock으로 설치하기</summary>

	1. wBlock 앱을 설치하고 실행한 뒤 초기 설정 안내를 따릅니다.
	2. Safari 확장 프로그램 설정에서 **wBlock Scripts**를 활성화하고 모든 웹 사이트에서 실행할 권한을 허용합니다.
		 - macOS: `Safari` > `설정` > `확장 프로그램`
		 - iOS·iPadOS 18 이상: `설정` > `앱` > `Safari` > `확장 프로그램`
		 - iOS·iPadOS 17 이하: `설정` > `Safari` > `확장 프로그램`
	3. wBlock 앱의 `Userscripts` 화면에서 추가 메뉴(`+`) > `Userscript` > `URL` > `Single URL`을 선택합니다.
	4. [빠른 시작 URL](https://cdn.jsdelivr.net/npm/@filteringdev/crackle@latest/dist/crackle.user.js)을 입력하고 `Next`를 누릅니다.
	5. 메타데이터를 확인한 뒤 `Add`를 눌러 스크립트를 추가하고 활성화합니다.
	6. Safari에서 치지직을 열고 있는 탭으로 돌아가 새로고침합니다.

	</details>

설치 후 치지직 웹 사이트에서 자동으로 동작합니다. 유저스크립트 매니저의 업데이트 기능을 활성화해 최신 버전을 유지하세요.

> [!NOTE]
> 치지직 또는 광고 플랫폼의 구현이 변경되면 일시적으로 동작하지 않을 수 있습니다.

## 개발

사전에 [Node.js](https://nodejs.org/)와 [pnpm](https://pnpm.io/)이 필요합니다.

```sh
pnpm install
pnpm run debug   # 개발용 유저스크립트를 감시 빌드하고 로컬 서버를 시작합니다.
pnpm run build   # 최소화된 배포용 유저스크립트를 생성합니다.
pnpm run lint    # TypeScript와 oxlint를 실행합니다.
pnpm run test    # AVA 테스트를 실행합니다.
```

빌드 결과물은 `dist/`에 생성됩니다. 개발 빌드는 `crackle.dev.user.js`, 배포 빌드는 `crackle.user.js`입니다.

## 라이선스

[MPL-2.0](LICENSE)으로 배포됩니다.