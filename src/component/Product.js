import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { useParams } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addCart(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delCart(product));
      setCartBtn("Add to Cart");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.then((res) => res.json()));
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <ClipLoader color="orange" size={50} className="text-center" />;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i
              className="fa fa-star ms-1"
              style={{ color: " rgb(255, 179, 3)" }}
            ></i>
            <i
              className="fa fa-star"
              style={{ color: " rgb(255, 179, 3)" }}
            ></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className=" btn btn-outline-dark px-4 py-2"
            onClick={() => handleCart(product)}
          >
            {cartBtn}
          </button>
          <NavLink to="/cart" className=" btn btn-outline-dark px-3 py-2 ms-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-3">
        <div className="row py-3 justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
