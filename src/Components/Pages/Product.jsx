import { useState } from "react";
import datas from "../../datas.json";
import Card from "../Card";

function Product() {
    const [sortOption, setSortOption] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const sortedData = [...datas].sort((a, b) => {
        switch (sortOption) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "label-asc":
                return a.label.localeCompare(b.label);
            case "label-desc":
                return b.label.localeCompare(a.label);
            default:
                return 0;
        }
    });

	const filteredData = sortedData.filter((data) =>
    data.label.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(
        searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    )
);

    return (
        <>
            <section className="wrapper_product">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <label htmlFor="sort">
                    <span>Tri par :</span>
                    <select
                        name="sort"
                        id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">---</option>
                        <option value="price-asc">Prix croissant</option>
                        <option value="price-desc">Prix décroissant</option>
                        <option value="label-asc">Nom croissant</option>
                        <option value="label-desc">Nom décroissant</option>
                    </select>
                </label>

                <h2>Tous nos produits !</h2>
                {filteredData.map((data) => (
                    <Card product={data} key={data.id} from={"product-page"} />
                ))}
            </section>
        </>
    );
}

export default Product;
