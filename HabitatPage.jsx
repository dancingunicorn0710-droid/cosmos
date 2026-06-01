/* =====================================================================
   cosmos hi-fi site — The Habitat page
   ===================================================================== */
const { createElement: h, Fragment } = React;

window.HabitatPage = function HabitatPage({ go }) {
  const S = window.SITE;

  return h(Fragment, null,
    h("div", { className: "crumb" },
      h("div", { className: "shell" },
        h("button", { onClick: () => go("landing") }, "cosmos"), h("span", null, "/"),
        h("span", { className: "here" }, "the habitat")
      )
    ),

    /* INTRO */
    h("section", { className: "section", "data-screen-label": "HAB · Intro", style: { paddingTop: 64, paddingBottom: 64 } },
      h("div", { className: "shell hab-intro" },
        h("div", { className: "eyebrow" }, "The Habitat — 하나의 작은 생태계"),
        h("h1", { style: { maxWidth: "none", whiteSpace: "nowrap" } }, "행성은 ", h("span", { className: "pt" }, "네 개의 층"), "으로 만들어집니다"),
        h("p", { className: "sub" }, "모든 cosmos 챔버는 같은 생태 구조 위에 종에 맞춰 세팅됩니다. 기질부터 기후까지, 네 개의 층이 하나의 미기후를 이룹니다.")
      )
    ),

    /* EXPLODED DIAGRAM */
    h("section", { className: "section", "data-screen-label": "HAB · Exploded Diagram" },
      h("div", { className: "shell" },
        h("div", { className: "diagram" },
          S.habLayers.map((l, i) =>
            h("div", { className: "layer " + l.cls, key: i },
              h("div", { className: "layer-head" },
                h("span", { className: "lnum" }, l.num),
                h("span", { className: "lname" }, l.name),
                h("span", { className: "len" }, l.en)
              ),
              h("div", { className: "layer-desc" }, l.d)
            )
          )
        )
      )
    ),

    /* 4 ELEMENTS */
    h("section", { className: "section", "data-screen-label": "HAB · 4 Elements" },
      h("div", { className: "shell" },
        h("div", { className: "sec-head" },
          h("div", null,
            h("div", { className: "eyebrow" }, "4 Elements"),
            h("h2", null, "Substrate · Hardscape · Lighting · Climate")
          )
        ),
        h("div", { className: "elems" },
          S.habElems.map((e, i) =>
            h("div", { className: "elem", key: i },
              h("div", { className: "eico" }, e.ico),
              h("h4", null, e.ko),
              h("div", { className: "en" }, e.en),
              h("div", { className: "d" }, e.d)
            )
          )
        )
      )
    ),

    /* SPECIES GUIDE */
    h("section", { className: "section", "data-screen-label": "HAB · Species Guide" },
      h("div", { className: "shell" },
        h("div", { className: "sec-head" },
          h("div", null,
            h("div", { className: "eyebrow" }, "종별 세팅 가이드"),
            h("h2", { style: { maxWidth: "none", whiteSpace: "nowrap" } }, "종에 따라 행성을 조율합니다.")
          ),
          h("p", { className: "sub" }, "Planet 타입(Desert · Moss · Canyon)별로 네 요소의 값을 프리셋합니다.")
        ),
        h("div", { className: "guide" },
          h("div", { className: "grow ghead" },
            h("div", { className: "gcell" }, "종 (Species)"),
            h("div", { className: "gcell" }, "Planet"),
            h("div", { className: "gcell" }, "Substrate"),
            h("div", { className: "gcell" }, "Temp"),
            h("div", { className: "gcell" }, "Humidity")
          ),
          S.habGuide.map((g, i) =>
            h("div", { className: "grow", key: i },
              h("div", { className: "gcell sp" }, g.sp),
              h("div", { className: "gcell" },
                h("span", { className: "planet " + g.planet }, h("span", { className: "dot" }), g.env)
              ),
              h("div", { className: "gcell" }, g.sub),
              h("div", { className: "gcell" }, g.temp),
              h("div", { className: "gcell" }, g.hum)
            )
          )
        ),
        h("div", { className: "cta-row", style: { display: "flex", gap: 12, marginTop: 36 } },
          h("button", { className: "btn", onClick: () => go("product") }, "제품에 적용해 보기 →"),
          h("button", { className: "btn ghost", onClick: () => go("landing") }, "처음으로")
        )
      )
    )
  );
};
