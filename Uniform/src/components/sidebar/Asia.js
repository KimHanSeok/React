import './Asia.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Asia = () => {
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
                {itemDatas[6].map((asiaDatas) => <Item
                    key = {cnt++} 
                    _id = {asiaDatas._id}
                    name = {asiaDatas.name}
                    price = {asiaDatas.price}
                    img = {asiaDatas.img}
                    detail = {asiaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Asia;