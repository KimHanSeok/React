import './Europe.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Europe = () => {
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
                {itemDatas[5].map((europeDatas) => <Item
                    key = {cnt++} 
                    _id = {europeDatas._id}
                    name = {europeDatas.name}
                    price = {europeDatas.price}
                    img = {europeDatas.img}
                    detail = {europeDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Europe;