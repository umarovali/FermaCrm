import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ProductItem from './ProductItem';
import { useTranslation } from "react-i18next";

export default function ProductTable() {
  const { t } = useTranslation();

    return (
        <section>
            <div className="container">
                <div className="table_bg">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>{t("name")}<IoIosArrowDown className="th_icon" /></th>
                                <th>{t("quantity")}<IoIosArrowDown className="th_icon" /></th>
                                <th>{t("price")} (сом)<IoIosArrowDown className="th_icon" /></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductItem id={1} name="С1" quantity="10 000" price="3 500" />
                            <ProductItem id={2} name="С2" quantity="10 000" price="4 500" />
                            <ProductItem id={3} name="С3" quantity="10 000" price="5 500" />
                            <ProductItem id={4} name="С4" quantity="10 000" price="6 500" />
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
