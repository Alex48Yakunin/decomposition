// 1. Компонент принимает массив с табами (сейчас в СМИ, в Германии, Рекомендуем, Видео, Картинка, новости и т.д.);
// 2. Выводит элементы массива.

export default function Tabs({tabsList}){

  return (
    <div className="tabs">
      {tabsList.map((item, index) => {
        return (
          <div key={index} className="tabs__item">{item.value}</div>
        )
      })}
    </div>
  )
}