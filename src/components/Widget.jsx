// Базовый компонент для отрисовки виджетов

export default function Widget({title, children}) {
  return (
    <div className="widget">
        <div className="widget__title">{title}</div>
        <div className="widget__content">{children}</div>
    </div>
  );
}