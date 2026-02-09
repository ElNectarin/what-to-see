import React from "react";
import "../styles/FilmDescriptionComponentStyle.scss";
import pulpPoster from "../assets/pulp_poster.jpg";
import johnImg from "../assets/john.webp"
import samImg from "../assets/sam_l.webp"


function FilmDescriptionComponent() {
  return (
    <div className="film_description_container">
      <div className="film_description_poster_container">
        <img src={pulpPoster} alt="film_poster" width={300} height={300} />
        <div className="film_description_director">
        <h3>Режиссер: Квентин Тарантино</h3>
        <h3>Сценарий: Квентин Тарантино, Роджер Эвери</h3>
        </div>
      </div>
      <div className="film_description_name_container">
        <div className="film_description_name">
          <h1>Pulp fiction (1994)</h1>
        </div>
        <div className="film_description_text">
          <span>
            Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы
            в перерывах между разборками и решением проблем с должниками
            криминального босса Марселласа Уоллеса. В первой истории Винсент
            проводит незабываемый вечер с женой Марселласа Мией. Во второй
            Марселлас покупает боксёра Бутча Кулиджа, чтобы тот сдал бой. В
            третьей истории Винсент и Джулс по нелепой случайности попадают в
            неприятности.
          </span>
          <div className="film_description_characteristic">
            <h3>Год производства: 1994</h3>
            <h3>Страна: США</h3>
            <h3>Жанр: криминал, драма</h3>
            <h3>Бюджет: $8 000 000</h3>
            <h3>Сборы в мире: $213 928 762</h3>
            <h3>Возраст: 18+</h3>
            <h3>Время: 2 ч 34 мин</h3>
          </div>
          <div className="film_description_actors">
              <div>
                <img src={johnImg} alt="actor_first" width={50} height={50} />
              </div>
              <div>
                <img src={samImg} alt="second" width={50} height={50} />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDescriptionComponent;
