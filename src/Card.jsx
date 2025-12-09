
function Card(props)
{
    return(
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="./img2.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Traje de papanoel</h2>
    <p>El traje de Papá Noel es un atuendo clásico, icónico y festivo</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>



        </div>
    );
}
export default Card;