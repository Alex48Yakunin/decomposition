import { useState } from "react"
// Компонент поиска, имеет состояние формы

export default function Search (){

  const [form, setForm] = useState({text: null});

  function handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setForm({
      text: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // отправка данных и вывод вариантов в search-list
  }

  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit}>
          <input 
            type="text" 
            defaultValue={form.text}
            onChange={handleInputChange}/>
          <div className="search__list"></div>
          <button className="search__keyboard"></button>
          <button className="search__submit">Найти</button>
      </form>
    </div>
  )
}