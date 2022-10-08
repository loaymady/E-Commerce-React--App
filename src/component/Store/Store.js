import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import "./Store.css";

const Store = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.then((res) => res.clone().json()));
        setFilter(await response.then((res) => res.json()));
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (pro) => {
    const updateList = data.filter((x) => x.category === pro);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttonss d-flex justify-content-center pb-5">
          <button
            className="btn btn-outline-dark me-2 mt-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2  mt-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2  mt-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2  mt-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2  mt-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4  ">
                <div
                  className="card h-100 text-center p-4  border-3"
                  key={product.id}
                >
                  <div className="img">
                    <img
                      src={product.image}
                      className="card-img-top mb-0"
                      alt={product.title}
                      height="260px"
                    />
                    <div className="card-body">
                      <NavLink
                        to={`/store/${product.id}`}
                        className="btn btn-outline-light "
                      >
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                  <div className="card-detail mt-3">
                    <h5 className="card-title">
                      {product.title.substring(0, 11)}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-2 py-5">
        <div className="row">
          <div className="col-12 mb-2">
            <h1 className="dispaly-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Store;
