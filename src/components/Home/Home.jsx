import { t } from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./home.css";
function Home() {
  const { i18n } = useTranslation();
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang);
  }, []);
  return (
    <div className="col">
      <div className="main-title">
        <h2>
          {t("about1")}
          <img src="/Emoj.png" alt="emoje_icon" />,
        </h2>
        <h2>{t("about2")}</h2>
        <h2>{t("about3")}</h2>

        <p>{t("title")}</p>
        <div className="thum">
          <a href="#">HIRE ME</a>
          <a href="#">SEE MY PROJECTS</a>
        </div>
      </div>
      <div className="main-img">
        <img src="/user.png" alt="user_img" />
      </div>
    </div>
  );
}

export default Home;
