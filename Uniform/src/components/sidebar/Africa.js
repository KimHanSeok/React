import './Africa.css';
import Item from './Item';
import {ItemData} from './ItemData';

const Africa = () => {
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
                {itemDatas[8].map((africaDatas) => <Item
                    key = {cnt++} 
                    _id = {africaDatas._id}
                    name = {africaDatas.name}
                    price = {africaDatas.price}
                    img = {africaDatas.img}
                    detail = {africaDatas.details}
                    />)}
            </div>
        </>
    )
};

export default Africa;