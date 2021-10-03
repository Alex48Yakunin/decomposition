import Widget from "./Widget";

// Выводит инофрмацию о телепередачах
// Принимает массив объектов с виджетами

export default function WidgetProgram({widgets}) {

  function isType(type) {
    return type === 'program';
  }

  const currentWidget = widgets.find(isType);

  return (
    <Widget title="Телепрограмма">
      <ul className="program">
          {currentWidget.map(function(item, index) {
            return (
              <li key={index} className="program__item">
                <a href={item.link} className="program___link">
                    <span className="program___time">{item.time}</span>
                    <span className="program___title">{item.title}</span>
                    <span className="program___text">{item.text}</span>
                </a>
              </li>
            )
          })}
      </ul>
    </Widget>
  )
}