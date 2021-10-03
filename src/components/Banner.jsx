// Получает картинку и выводит её

export default function Banner({banner}) {
  return (
    <div className="banner">
      <a href={banner.link} className="banner__link">
        <img src={banner.src} alt="" className="banner__img" />
      </a>
    </div>
  )
}