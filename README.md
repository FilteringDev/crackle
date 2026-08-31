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


## 설치

유저스크립트 매니저가 필요합니다. 아래 지원 방법 중 하나를 선택해 설치하세요.

### 빠른 시작

아래 URL을 클릭하여 설치하세요.

https://cdn.jsdelivr.net/npm/@filteringdev/crackle@latest/dist/crackle.user.js

### 설치하는 법

- [Violentmonkey](https://addons.mozilla.org/ko/firefox/addon/violentmonkey/) - Firefox 브라우저 확장
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

- AdGuard for iOS

	AdGuard for iOS는 현재 유저스크립트를 지원하지 않지만, [Userscripts](https://apps.apple.com/kr/app/userscripts/id1463298887)이나 [wBlock](https://apps.apple.com/kr/app/wblock/id6746388723) 앱을 대안으로 사용할 수 있습니다.

	<details>
	<summary>iOS에서 Userscripts로 설치하기</summary>

	1. [Userscripts 앱](https://apps.apple.com/kr/app/userscripts/id1463298887)을 설치합니다.
	2. Safari 설정에서 Userscripts 확장을 활성화하고 `기타 웹 사이트` 권한을 허용합니다.
		 - iOS 18 이상: `시스템 설정` > `앱` > `Safari` > `확장 프로그램`
		 - iOS 17 이하: `시스템 설정` > `Safari` > `확장 프로그램`
	3. Safari에서 [빠른 시작 URL](https://cdn.jsdelivr.net/npm/@filteringdev/crackle@latest/dist/crackle.user.js)을 엽니다.
	4. Safari 주소 막대의 확장 프로그램 아이콘을 누르고 Userscripts를 선택합니다.
	5. 설치 버튼을 누른 뒤, 열린 팝업을 끝까지 스크롤하고 설치를 완료합니다.
	6. 치지직을 열고 있는 탭으로 돌아가 새로고침합니다.

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
