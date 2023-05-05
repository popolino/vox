import classes from "../../features/Friends/Users.module.scss";
import * as React from "react";

const Paginator = (props) => {
  let pageCountSize = Math.ceil(props.totalUsersCount / props.pageCount);
  let pages = [];
  for (let i = 1; i <= pageCountSize && i <= 5; i++) {
    pages.push(i);
  }
  const lastElementOnPage =
    props.currentPage !== 1
      ? props.pageCount * props.currentPage
      : props.pageCount;
  const firstElementOnPage =
    props.currentPage * props.pageCount - props.pageCount + 1;
  return (
    <div className={classes.pagination}>
      <div className={classes["top-panel"]}>
        <button
          disabled={props.currentPage === 1}
          onClick={() => {
            props.onPageChanged(props.currentPage);
            props.setPreviousPage();
          }}
        >
          ❮
        </button>
        {pages.map((p) => (
          <button
            key={p}
            className={props.currentPage === p ? classes.selected : ""}
            onClick={() => {
              props.selectCurrentPage(p);
              props.onPageChanged(props.currentPage);
            }}
          >
            {p}
          </button>
        ))}
        {props.currentPage > 5 && props.currentPage < pageCountSize ? (
          <>
            <p>...</p>
            <button
              className={classes.selected}
              onClick={() => {
                props.onPageChanged(props.currentPage);
              }}
            >
              {props.currentPage}
            </button>
          </>
        ) : (
          <p>...</p>
        )}

        <button
          className={
            props.currentPage === pageCountSize ? classes.selected : ""
          }
          onClick={() => props.onPageChanged(pageCountSize)}
        >
          {pageCountSize}
        </button>
        <button
          onClick={() => {
            props.onPageChanged(props.currentPage);
            props.setNextPage();
          }}
          disabled={props.currentPage === pageCountSize}
        >
          ❯
        </button>
      </div>
      <div className={classes["bottom-panel"]}>
        <select
          name="elements"
          id="v"
          defaultValue={"rowsPerPages"}
          onChange={(event) => {
            props.onPageCountChanged(event.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <p>{`Results: ${firstElementOnPage} - ${lastElementOnPage} of ${props.totalUsersCount}`}</p>
      </div>
    </div>
  );
};

export default Paginator;
