import { Link } from "react-router-dom";

function FrontPageBrandCards({ data }) {
  console.log(data);
  return (
    <div className="column is-one-fifth-widescreen is-one-quarter-tablet is-vcentered">
      <Link to={data.linkTo}>
        <div
          className="tile is-parent is-vertical has-background-light"
          style={{ minHeight: "350px" }}
        >
          <div className="tile is-child is-clickable">
            <figure className="image is-square">
              <img className="is-rounded" src={data.src} alt={data.alt} />
            </figure>
          </div>
          <div className="tile is-child content is-uppercase has-text-weight-semibold has-text-centered ">
            {data.title}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FrontPageBrandCards;
