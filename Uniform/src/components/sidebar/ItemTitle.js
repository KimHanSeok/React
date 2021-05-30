import './ItemTitle.css';
import Item from './Item';
import {Data} from './itemdata';

const ItemTitle = () => {
    const itemData = Data;
    let cnt = 0;

    return (
        <>
            <div className="item_title" >
                <div className="itemtitle_text_box">
                    <h1>PREMIER LEAGUE</h1>
                    <p>
                        REP1ER's PREMIER LEAGUE<br />
                    </p>
                </div>
            </div>

            <div className = "item_grid">
                {itemData.map((itemDatas) => <Item
                    key = {cnt++} 
                    _id = {itemDatas._id}
                    name = {itemDatas.name}
                    price = {itemDatas.price}
                    img = {itemDatas.img}
                    detail = {itemDatas.details}
                    />)}
            </div>
        </>
    )
};

export default ItemTitle;