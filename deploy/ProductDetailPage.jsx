/* =====================================================================
   cosmos hi-fi site — Product Detail page (themed to featured line)
   ===================================================================== */
const { createElement: h, Fragment } = React;

window.ProductDetailPage = function ProductDetailPage({ line, go }) {
  const S = window.SITE;
  const L = S.lines[line];
  const P = L.bed;
  const [active, setActive] = React.useState(0);

  React.useEffect(() => { setActive(0); }, [line]);

  const img = (file, alt) => h("img", { src: "assets/products/" + file + ".png", alt: alt || "" });

  return h(Fragment, null,
    h("div", { className: "crumb" },
      h("div", { className: "shell" },
        h("button", { onClick: () => go("landing") }, "cosmos"), h("span", null, "/"),
        h("button", { onClick: () => go("landing") }, line), h("span", null, "/"),
        h("span", { className: "here" }, P.name)
      )
    ),

    /* TOP — gallery + info */
    h("section", { className: "section", "data-screen-label": "PD · Gallery + Info", style: { paddingTop: 56 } },
      h("div", { className: "shell pd-top" },
        h("div", null,
          h("div", { className: "pd-gallery" },
            h("div", { className: "pd-thumbs" },
              L.gallery.map((f, i) =>
                h("div", { key: i, className: "pd-thumb" + (i === active ? " active" : ""), onClick: () => setActive(i) }, img(f))
              )
            ),
            h("div", { className: "pd-stage" }, img(L.gallery[active], P.name))
          )
        ),

        h("div", { className: "pd-info" },
          h("img", { className: "wm", src: "assets/wordmark-" + line + ".svg", alt: line }),
          h("div", { className: "eyebrow" }, P.code + " · " + P.cat + " · ", h("span", { className: "pt" }, L.planet)),
          h("h1", null, P.name),
          h("p", { className: "sub" }, P.sub),

          h("div", { className: "pd-block" },
            h("div", { className: "lab" }, "Habitat Chamber 구성"),
            h("div", { className: "cfg-tags" },
              P.config.map((c, i) => h("span", { className: "cfg-tag", key: i }, h("span", { className: "k" }, c.k), h("span", { className: "bar" }, "|"), c.v))
            )
          ),

          h("div", { className: "pd-block" },
            h("div", { className: "lab" }, "호환 종 · Compatible species"),
            h("div", { className: "species" },
              P.species.map((s, i) =>
                h("div", { className: "sp", key: i },
                  h("div", { className: "spimg" }, img(L.species_imgs[i], s.name)),
                  h("div", { className: "spname" }, s.name),
                  h("div", { className: "spfit" }, "● " + s.fit)
                )
              )
            )
          ),

          h("div", { className: "cta-row", style: { display: "flex", gap: 12 } },
            h("button", { className: "btn accent" }, "상담 신청"),
            h("button", { className: "btn ghost", onClick: () => go("habitat") }, "서식 환경 보기 →")
          )
        )
      )
    ),

    /* 5 product services */
    h("section", { className: "section", "data-screen-label": "PD · 5 Product Service" },
      h("div", { className: "shell" },
        h("div", { className: "sec-head" },
          h("div", null,
            h("div", { className: "eyebrow" }, "Product Service — 함께 제공"),
            h("h2", { style: { maxWidth: "none", whiteSpace: "nowrap" } }, "제품과 함께 따라오는 네 가지")
          )
        ),
        h("div", { className: "svc-list" },
          S.pdServices.map((s, i) =>
            h("div", { className: "svc-row", key: i },
              h("div", { className: "n" }, "0" + (i + 1)),
              h("div", null, h("h4", null, s.ko), h("div", { className: "d" }, s.d))
            )
          )
        )
      )
    )
  );
};
