import './Legend.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Legend = () => {
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
                {itemDatas[10].map((legendDatas) => <Item
                    key = {cnt++} 
                    _id = {legendDatas._id}
                    name = {legendDatas.name}
                    price = {legendDatas.price}
                    img = {legendDatas.img}
                    detail = {legendDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Legend;