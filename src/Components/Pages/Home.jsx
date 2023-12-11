// import datas from "../../datas.json";
// import Card from "../Card";

// function Home() {
//     return (
//         <main>
//             <section className="wrapper_product">
//                 <h2>Électronique</h2>
//                 {datas.map(
//                     (data) =>
//                         data.category === "électronique" && (
//                             <Card product={data} key={data.id} />
//                         )
//                 )}
//             </section>

//             <section className="wrapper_product">
//                 <h2>Sport</h2>
//                 {datas.map(
//                     (data) =>
//                         data.category === "sport" && (
//                             <Card product={data} key={data.id} />
//                         )
//                 )}
//             </section>
//         </main>
//     );
// }

// export default Home;

import datas from "../../datas.json";
import Card from "../Card";

function Home() {
    return (
        <main>
            <section className="wrapper_product">
                <h2>Électronique</h2>
                <div className="scroll-container">
                    {datas.map(
                        (data) =>
                            data.category === "électronique" && (
                                <Card product={data} key={data.id} />
                            )
                    )}
                </div>
            </section>

            <section className="wrapper_product">
                <h2>Sport</h2>
                <div className="scroll-container">
                    {datas.map(
                        (data) =>
                            data.category === "sport" && (
                                <Card product={data} key={data.id} />
                            )
                    )}
                </div>
            </section>
        </main>
    );
}

export default Home;