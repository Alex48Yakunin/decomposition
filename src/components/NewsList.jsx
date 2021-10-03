// 1. Компонент выводит список актуальных новостей
// 2. Принимает через props массив объектов с новостью и иконкой

export default function NewsList({newsList}){

  return (
    <div className="news-list">
      {newsList.map((item, index) => {
        return (
          <div className="news-list__item" key={index}>
            <img src={item.src} alt="" />
            <a href={item.href} className="new-list__link">{item.link}</a>
          </div>
        )
      })}
    </div>
  )
}