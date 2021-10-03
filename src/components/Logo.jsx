// Компонент принимает ссылку на логотив и выводит его


export default function Logo({logo}){
  return (
    <a href="https://yandex.ru/" className="logo">
      <img src={logo} alt="" />
    </a>
  )
}