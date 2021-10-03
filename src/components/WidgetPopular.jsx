import Widget from "./Widget";

// Выводит инофрмацию о посещаемыъ местах
// Принимает массив объектов с виджетами

export default function WidgetPopular({widgets}) {

  function isType(type) {
    return type === 'popular';
  }

  const currentWidget = widgets.find(isType);

  return (
    <Widget title="Посещаемое">
      <ul className="popular">
          {currentWidget.map(function(item, index) {
            return (
              <li key={index} className="popular__item">
                <a href={item.link} className="popular__link">
                    <span className="popular__title">{item.title}</span>
                    <span className="popular__text">{item.text}</span>
                </a>
              </li>
            )
          })}
      </ul>
    </Widget>
  )
}