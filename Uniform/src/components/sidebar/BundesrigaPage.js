import './BundesrigaPage.css';
import Item from './Item';
import {ItemData} from './ItemData';

const LaligaPage = () => {
    const itemDatas = ItemData;
    let cnt = 0;

    return (
        <>
            <div className="premier_title" >
                <div className="premier_title_text_box">
                    <h1>PREMIER LEAGUE</h1>
                    <p>
                        REP1ER's PREMIER LEAGUE<br />
                    </p>
                </div>
            </div>

            <div className = "premier_grid">
                {itemDatas[3].map((bundesrigaDatas) => <Item
                    key = {cnt++} 
                    _id = {bundesrigaDatas._id}
                    name = {bundesrigaDatas.name}
                    price = {bundesrigaDatas.price}
                    img = {bundesrigaDatas.img}
                    detail = {bundesrigaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default LaligaPage;