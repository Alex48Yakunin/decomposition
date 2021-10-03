// Компонент выводит текущую дату в нужном формате

export default function Date({format}){

  let dateNow = new Date(format);

  return (
    <div className="date-now">{dateNow}</div>
  )
}