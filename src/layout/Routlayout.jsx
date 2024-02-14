import { NavLink, Outlet } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { t } from "i18next";

function Routlayout() {
  const [leng, setLeng] = useState("en");
  const { i18n } = useTranslation();
  const [mode, setMode] = useState(false);
  const [loder, setShowLoder] = useState(false);

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang);
    setLeng(lang);
  }, []);

  setTimeout(() => {
    setShowLoder(true);
  }, 4000);

  function hendalchange(e) {
    setLeng(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  }

  function hendalClick() {
    mode ? setMode(false) : setMode(true);
  }

  return (
    <>
      {loder ? (
        <div className="contenet" data-theme={mode ? "Dark" : "Light"}>
          <header>
            <div onClick={hendalClick} className="mode">
              {mode ? (
                <>
                  <img src="/Light.jpg" alt="light-icon" />
                  <p>Light mode</p>
                </>
              ) : (
                <>
                  <img src="/Darck.jpg" alt="darck-icon" />
                  <p>Dark mode</p>
                </>
              )}
            </div>
            <nav>
              <li>
                <NavLink to="/about">{t("about")}</NavLink>
              </li>
              <li>
                <NavLink to="/">{t("skills")}</NavLink>
              </li>
              <li>
                <NavLink to="/project">{t("project")}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{t("contact")}</NavLink>
              </li>
              <li>
                <select onChange={hendalchange} value={leng} className="select">
                  <option value="en">EN</option>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                </select>
              </li>
            </nav>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
          <footer></footer>
        </div>
      ) : (
        <div className="loader-wrapper">
          <div>
            <svg class="loader" viewBox="0 0 48 30" width="48px" height="30px">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              >
                <g transform="translate(9.5,19)">
                  <circle
                    class="loader_tire"
                    r="9"
                    stroke-dasharray="56.549 56.549"
                  ></circle>
                  <g
                    class="loader_spokes-spin"
                    stroke-dasharray="31.416 31.416"
                    stroke-dashoffset="-23.562"
                  >
                    <circle class="loader_spokes" r="5"></circle>
                    <circle
                      class="loader_spokes"
                      r="5"
                      transform="rotate(180,0,0)"
                    ></circle>
                  </g>
                </g>
                <g transform="translate(24,19)">
                  <g
                    class="loader_pedals-spin"
                    stroke-dasharray="25.133 25.133"
                    stroke-dashoffset="-21.991"
                    transform="rotate(67.5,0,0)"
                  >
                    <circle class="loader_pedals" r="4"></circle>
                    <circle
                      class="loader_pedals"
                      r="4"
                      transform="rotate(180,0,0)"
                    ></circle>
                  </g>
                </g>
                <g transform="translate(38.5,19)">
                  <circle
                    class="loader_tire"
                    r="9"
                    stroke-dasharray="56.549 56.549"
                  ></circle>
                  <g
                    class="loader_spokes-spin"
                    stroke-dasharray="31.416 31.416"
                    stroke-dashoffset="-23.562"
                  >
                    <circle class="loader_spokes" r="5"></circle>
                    <circle
                      class="loader_spokes"
                      r="5"
                      transform="rotate(180,0,0)"
                    ></circle>
                  </g>
                </g>
                <polyline
                  class="loader_seat"
                  points="14 3,18 3"
                  stroke-dasharray="5 5"
                ></polyline>
                <polyline
                  class="loader_body"
                  points="16 3,24 19,9.5 19,18 8,34 7,24 19"
                  stroke-dasharray="79 79"
                ></polyline>
                <path
                  class="loader_handlebars"
                  d="m30,2h6s1,0,1,1-1,1-1,1"
                  stroke-dasharray="10 10"
                ></path>
                <polyline
                  class="loader_front"
                  points="32.5 2,38.5 19"
                  stroke-dasharray="19 19"
                ></polyline>
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default Routlayout;
