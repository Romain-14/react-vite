import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ product, from }) {
    return (
        <article>
            <h3>{product.label}</h3>
            <p>{product.description}</p>
            <img
                src={`/assets/img/${product.image}`}
                alt={product.alt ? product.alt : "alt en cours de rédaction !"}
            />
            {from === "product-page" && <p>{product.price} €</p>}
            <Link to={`/product/${product.id}`}>Voir le produit</Link>
        </article>
    );
}

Card.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        alt: PropTypes.string,
    }),
    from: PropTypes.string,
};

export default Card;
