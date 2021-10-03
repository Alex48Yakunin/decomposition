// 1. Компонент выводит кусы мровых катировок
// 2. Принимает массив объектов (название, текущая стоимость, старая стоимость)
// 3. В зависимости от изменения цены, неоходимло добавить реализацию "+" и "-" перед процентами.

export default function Tabs({currencies}){

  return (
    <div className="world-cruises">
      {currencies.map((item, index) => {
        return (
          <div key={index} className="world-cruises__item">
            <span className="world-cruises__name">{item.name}</span>
            <span className="world-cruises__value">{(item.currentValue).toFixed(2)}</span>
            <span className="world-cruises__progress">{((item.currentValue * 100)  / item.lastValue).toFixed(2) + '%'}</span>
          </div>
        )
      })}
    </div>
  )
}