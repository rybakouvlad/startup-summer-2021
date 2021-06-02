import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

export const RepoPagination = ({ repos, page, setPage }) => {
  const SLIDERS = Math.ceil(repos / 4);
  const [items, setItems] = useState([]);

  const handlerPrev = () => {
    setPage(page - 1);
  };
  
  const handlerNext = () => {
    setPage(page + 1);
  };

  const handlerClick = (event) => {
    setPage(Number(event.target.innerText));
  };

  useEffect(() => {
    const arr = [];
    if (page > 3) {
      arr.push(<Pagination.Ellipsis key="a" />);
    }
    if (page < 4) {
      for (let i = 2; i < 4; i++) {
        arr.push(
          <Pagination.Item key={i} onClick={handlerClick} active={page === i}>
            {i}
          </Pagination.Item>
        );
      }
    } else if (page > SLIDERS - 2) {
      for (let i = SLIDERS - 2; i < SLIDERS; i++) {
        arr.push(
          <Pagination.Item key={i} onClick={handlerClick} active={page === i}>
            {i}
          </Pagination.Item>
        );
      }
    } else {
      arr.push(
        <Pagination.Item key="b" onClick={handlerClick} active={true}>
          {page}
        </Pagination.Item>
      );
    }

    if (page < SLIDERS - 1) {
      arr.push(<Pagination.Ellipsis key="n" />);
    }
    setItems(arr);
  }, [page]);
  return (
    <div className="conteiner_pagination">
      <p>
        {(page - 1) * 4 + 1}-{(page - 1) * 4 + 4} of {repos} items
      </p>
      <Pagination className="repo_pagination">
        <Pagination.Prev key="w" onClick={handlerPrev} disabled={page === 1} />
        <Pagination.Item key="e" onClick={handlerClick} active={page === 1}>
          {1}
        </Pagination.Item>
        {items}
        <Pagination.Item
          key="z"
          onClick={handlerClick}
          active={page === SLIDERS}
        >
          {SLIDERS}
        </Pagination.Item>
        <Pagination.Next
          key="v"
          onClick={handlerNext}
          disabled={page === SLIDERS}
        />
      </Pagination>
    </div>
  );
};
