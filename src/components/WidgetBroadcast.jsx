import Widget from "./Widget";

// Выводит инофрмацию о эфире
// Принимает массив объектов с виджетами

export default function WidgetBroadcast({widgets}) {

  function isType(type) {
    return type === 'broadcast';
  }

  const currentWidget = widgets.find(isType);

  return (
    <Widget title="Эфир">
      <ul className="broadcast">
          {currentWidget.map(function(item, index) {
            return (
              <li key={index} className="broadcast__item">
                <a href={item.link} className="broadcast___link">
                    <img src={item.src} alt="" className="broadcast___icon"/>
                    <span className="broadcast___title">{item.title}</span>
                    <span className="broadcast___text">{item.text}</span>
                </a>
              </li>
            )
          })}
      </ul>
    </Widget>
  )
}