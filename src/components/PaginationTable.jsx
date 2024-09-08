import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";

export default function PaginationTable() {
  const { t } = useTranslation();
  const [siblingCount, setSiblingCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 320) {
        setSiblingCount(1);
      } else if (window.innerWidth <= 450) {
        setSiblingCount(1);
      } else if (window.innerWidth <= 580) {
        setSiblingCount(1);
      } else if (window.innerWidth <= 670) {
        setSiblingCount(1);
      } else {
        setSiblingCount(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pagination_table">
      <p className="pagination_all">
        {t("total")} 121 {t("piece")}
      </p>
      <Pagination
        className="pag"
        count={50}
        variant="outlined"
        shape="rounded"
        siblingCount={siblingCount}
        boundaryCount={1}
      />
    </div>
  );
}
