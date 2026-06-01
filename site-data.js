/* =====================================================================
   cosmos hi-fi site — data
   ===================================================================== */
window.SITE = {
  lines: {
    vessel: {
      id: "vessel", code: "line 01", planet: "Planet DESERT",
      desc: "건조 기후의 캡슐·관측 챔버. 생명 유지 장치로서의 가구.",
      bed:  { code: "v—01", cat: "BED", name: "orbiter", sub: "관측 챔버가 결합된 도킹 스테이션형 침대\n— vessel 라인의 시그니처.",
        config: [ {k:"챔버",v:"파노라마 글라스"},{k:"용적",v:"60 L"},{k:"기후",v:"건조 · Desert"},{k:"조명",v:"LED 스펙트럼"},{k:"환기",v:"측면 메쉬"},{k:"급수",v:"드립 자동"} ],
        species: [ {name:"레오파드 게코",fit:"최적"},{name:"펫테일 게코",fit:"적합"},{name:"호스필드 거북",fit:"적합"},{name:"왕사마귀",fit:"가능"} ] },
      gallery: ["v-01-orbiter","v-02-console","v-03-porthole","v-04-pod","v-05-module-01"],
      species_imgs: ["v-04-pod","v-03-porthole","v-06-archive","v-02-console"],
    },
    terra: {
      id: "terra", code: "line 02", planet: "Planet MOSS",
      desc: "이끼·원목·돌의 다습한 생태. 실내에 들인 작은 숲.",
      bed:  { code: "t—01", cat: "BED", name: "grove", sub: "이끼와 돌의 긴 대지 챔버가 깔린, 숲 바닥에서 잠드는 낮은 침대.",
        config: [ {k:"챔버",v:"오픈 글라스"},{k:"용적",v:"80 L"},{k:"기후",v:"다습 · Moss"},{k:"조명",v:"식물 생장등"},{k:"환기",v:"상부 순환"},{k:"급수",v:"미스팅"} ],
        species: [ {name:"크레스티드 게코",fit:"최적"},{name:"가고일 게코",fit:"적합"},{name:"청개구리",fit:"적합"},{name:"이끼도마뱀",fit:"가능"} ] },
      gallery: ["t-01-grove","t-02-roots","t-05-canopy","t-03-basin"],
      species_imgs: ["t-04-sapling","t-03-basin","t-06-strata","t-02-roots"],
    },
    cocoon: {
      id: "cocoon", code: "line 03", planet: "Planet CANYON",
      desc: "감싸안는 둥지와 따뜻한 빛. 인간과 서식이 한 품에.",
      bed:  { code: "c—01", cat: "BED", name: "nest", sub: "은은히 빛나는 서식 알코브를 감싸안는, 둥글고 포근한 둥지형 침대.",
        config: [ {k:"챔버",v:"라운드 글라스"},{k:"용적",v:"50 L"},{k:"기후",v:"온난 · Canyon"},{k:"조명",v:"웜 LED"},{k:"환기",v:"후면 메쉬"},{k:"급수",v:"수동 디시"} ],
        species: [ {name:"비어디드 드래곤",fit:"최적"},{name:"블루텅 스킨크",fit:"적합"},{name:"러시안 거북",fit:"적합"},{name:"로지헤어 타란튤라",fit:"가능"} ] },
      gallery: ["c-01-nest","c-05-burrow","c-04-pouch","c-03-pebble"],
      species_imgs: ["c-04-pouch","c-03-pebble","c-06-hive","c-05-burrow"],
    },
  },

  values: [
    { num:"01", ico:"⌖", ko:"통합", en:"Integration", d:"공간과 생태를 하나의 시스템으로." },
    { num:"02", ico:"⟁", ko:"공존", en:"Coexistence", d:"인간과 생명체가 같은 공간에." },
    { num:"03", ico:"❀", ko:"생태", en:"Aesthetic Ecology", d:"아름다움과 생태의 균형." },
    { num:"04", ico:"⚙", ko:"맞춤", en:"Customization", d:"종과 공간에 맞춘 환경 설계." },
  ],

  svcCats: [
    { n:"S1", ko:"가구 일체형 테라리움", d:"테이블·벽면·소파 일체형 챔버." },
    { n:"S2", ko:"모듈형 생태 가구", d:"조합·확장형 서식 환경." },
    { n:"S3", ko:"스마트 펫테크", d:"온습도·조명 자동 제어." },
    { n:"S4", ko:"조경 + 유지관리", d:"조경 설계와 정기 케어." },
  ],

  persona: [
    "미래지향적 감각의 20–30대 도시 거주자",
    "희귀 취향·독창적 라이프스타일",
    "단순한 반려가 아닌 ‘환경’을 소비",
    "디자인·오브제·공간 연출에 관심",
  ],

  pdServices: [
    { ko:"맞춤형 테라리움 조경", d:"종·공간에 맞춘 하드스케이프·식재 설계." },
    { ko:"설치 + 생태 사이클링", d:"배송·설치 후 초기 생태 사이클 세팅." },
    { ko:"스마트 환경 제어 연동", d:"온습도·조명 앱 연동 및 캘리브레이션." },
    { ko:"정기 유지관리", d:"월간 방문 점검·청소·식재 보충." },
  ],

  habElems: [
    { ico:"▦", ko:"기질", en:"Substrate", d:"토양·바닥재. 습도 보유와 굴착·여과의 기반." },
    { ico:"◮", ko:"지형", en:"Hardscape", d:"바위·유목·은신처. 영역과 동선을 만드는 구조." },
    { ico:"☀", ko:"조명", en:"Lighting", d:"UVB·일주기 스펙트럼. 체온·대사·광합성." },
    { ico:"≈", ko:"기후", en:"Climate", d:"온·습도·환기. 종에 맞춘 미기후를 일정하게." },
  ],

  habLayers: [
    { cls:"l-climate",   num:"04", name:"기후", en:"Climate · 공기·온습도", d:"온·습도·환기. 종에 맞춘 미기후를 일정하게 유지." },
    { cls:"l-lighting",  num:"03", name:"조명", en:"Lighting · 스펙트럼",   d:"UVB·일주기 스펙트럼. 체온·대사·식물 광합성." },
    { cls:"l-hardscape", num:"02", name:"지형", en:"Hardscape · 구조물",    d:"바위·유목·은신처. 영역과 동선을 만드는 구조." },
    { cls:"l-substrate", num:"01", name:"기질", en:"Substrate · 바닥재",    d:"토양·바닥재. 습도 보유와 굴착·여과의 기반." },
  ],

  habGuide: [
    { sp:"레오파드 게코",   planet:"vessel", env:"Desert", sub:"건조 샌드",   temp:"28–32℃", hum:"30–40%" },
    { sp:"크레스티드 게코", planet:"terra",  env:"Moss",   sub:"코코 + 모스", temp:"22–27℃", hum:"60–80%" },
    { sp:"비어디드 드래곤", planet:"cocoon", env:"Canyon", sub:"흙 + 모래",   temp:"26–35℃", hum:"40–50%" },
  ],
};
