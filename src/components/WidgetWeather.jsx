import Widget from "./Widget";

// Выводит инофрмацию о погоде
// Принимает массив объектов с виджетами

export default function WidgetWeather({widgets}) {

  function isType(type) {

    return type === 'weather';
  }

  const currentWidget = widgets.find(isType);

  return (
    <Widget title="Погода">
      <div className="weather">
          <img src={currentWidget.icon} alt="" />
          <span>{currentWidget.value}</span>
          <span>{currentWidget.morning}</span>
          <span>{currentWidget.evening}</span>
      </div>
    </Widget>
  )
}

