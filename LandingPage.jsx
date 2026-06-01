/* =====================================================================
   cosmos hi-fi site — Landing page
   ===================================================================== */
const { createElement: h, Fragment } = React;

const IMG = (file, alt) => h("img", { src: "assets/products/" + file + ".png", alt: alt || "" });
const WM  = (line, cls) => h("img", { className: cls, src: "assets/wordmark-" + line + ".svg", alt: line });

window.LandingPage = function LandingPage({ line, go }) {
  const S = window.SITE;
  const lines = ["vessel", "terra", "cocoon"];

  return h(Fragment, null,
    /* HERO */
    h("section", { className: "hero", "data-screen-label": "01 Hero" },
      h("div", { className: "left" },
        h("div", { className: "eyebrow" }, "Brand Essence — Living Planet"),
        h("h1", null, "Bring a Planet ", h("br"), "Into Your ", h("br"), h("span", { className: "pt" }, "Living Space")),
        h("p", { className: "kr" }, "당신의 공간에 하나의 생명을 잇다"),
        h("p", { className: "lede" }, "일상 가구에 유리 서식 챔버를 일체형으로 결합한 모듈형 리빙 시스템. 인간의 삶과 작은 생태계를 하나의 건축 안에 둡니다."),
        h("div", { className: "cta-row" },
          h("button", { className: "btn on-dark", onClick: () => go("product") }, "시스템 둘러보기"),
          h("button", { className: "btn on-dark ghost", onClick: () => go("habitat") }, "the habitat →")
        )
      ),
      h("div", { className: "right" }, IMG(S.lines[line].gallery[0], "cosmos hero"))
    ),

    /* STORY */
    h("section", { className: "section", "data-screen-label": "02 Story" },
      h("div", { className: "shell story" },
        h("div", { className: "eyebrow" }, "Brand Story"),
        h("p", { className: "q" }, "왜 우리는 함께 살면서도 ", h("br"), h("span", { className: "hl" }, "서로 다른 공간"), "에서 머물러야 할까?"),
        h("p", { className: "manifesto" }, "cosmos는 이색 반려동물과 인간의 삶을 분리하지 않고, 하나의 통합된 생태적 리빙 환경으로 ", h("br"), "재구성합니다. 각 가구는 하나의 생태계를 품은 작은 행성이 됩니다.")
      )
    ),

    /* CORE VALUES */
    h("section", { className: "section", "data-screen-label": "03 Core Values" },
      h("div", { className: "shell" },
        h("div", { className: "sec-head" },
          h("div", null,
            h("div", { className: "eyebrow" }, "Brand Core Values"),
            h("h2", { style: { maxWidth: "none", whiteSpace: "nowrap" } }, "네 개의 축으로 공존을 설계한다")
          ),
          h("p", { className: "sub", style: { maxWidth: "none", whiteSpace: "nowrap" } }, "Integration · Coexistence · Aesthetic Ecology · Customization")
        ),
        h("div", { className: "values" },
          S.values.map((v) =>
            h("div", { className: "vcard", key: v.num },
              h("div", { className: "vico" }, v.ico),
              h("div", { className: "vnum" }, v.num),
              h("h3", null, v.ko),
              h("div", { className: "en" }, v.en),
              h("p", { className: "d" }, v.d)
            )
          )
        )
      )
    ),

    /* THE SYSTEM — three lines */
    h("section", { className: "section", "data-screen-label": "04 Product · Lines" },
      h("div", { className: "shell" },
        h("div", { className: "sec-head" },
          h("div", null,
            h("div", { className: "eyebrow" }, "Product / Service — 핵심"),
            h("h2", null, "가구가 곧 하나의 행성이 된다")
          ),
          h("p", { className: "sub" }, "세 개의 라인, 각자의 기후. 일상 가구에 ", h("br"), "서식 환경을 결합한 cosmos 시스템.")
        ),
        h("div", { className: "lines" },
          lines.map((id) => {
            const L = S.lines[id];
            return h("div", { className: "linecard theme-" + id, key: id, onClick: () => go("product", id) },
              h("div", { className: "ph" }, IMG(L.gallery[0], id)),
              h("div", { className: "row" }, WM(id, "wm"), h("span", { className: "code" }, L.code)),
              h("p", { className: "desc" }, L.desc)
            );
          })
        ),
        h("div", { className: "svc-cats" },
          S.svcCats.map((c) =>
            h("div", { className: "svc-cat", key: c.n },
              h("div", { className: "n" }, c.n),
              h("h4", null, c.ko),
              h("p", { className: "d" }, c.d)
            )
          )
        )
      )
    ),

    /* PERSONA */
    h("section", { className: "section tint persona", "data-screen-label": "05 Persona" },
      h("div", { className: "shell" },
        h("div", { className: "sec-head" },
          h("div", null,
            h("div", { className: "eyebrow" }, "Brand Persona"),
            h("h2", null, "‘환경’을 소비하는 사람들")
          )
        ),
        h("div", { className: "plist" },
          S.persona.map((p, i) =>
            h("div", { className: "pitem", key: i },
              h("div", { className: "pn" }, "0" + (i + 1)),
              h("div", { className: "ptx" }, p)
            )
          )
        )
      )
    ),

    /* CTA */
    h("section", { className: "cta", "data-screen-label": "06 CTA" },
      h("div", { className: "shell" },
        h("h2", null, "당신의 공간에 하나의 생명을 잇다"),
        h("p", { className: "en" }, "Bring a Planet into Your Living Space"),
        h("div", { className: "signup" },
          h("input", { className: "field", placeholder: "이메일로 카탈로그 받기" }),
          h("button", { className: "btn on-dark" }, "신청 →")
        )
      )
    )
  );
};
