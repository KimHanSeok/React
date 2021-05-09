import SimpleReactFooter from "simple-react-footer";

function Footer1() {

    const description = "Hi, bro!!! This is a place for Repler. Contact me here if you have any Suggestions and questions. R_E_P_1_E_R: 11458 Gyeongdong Daehak-ro 27, Yangju-si, Gyeonggi-do (Goam-dong, Kyungdong University) Tel: 031-869-9900 Fax: 031-869-990";
    
    const title = "REP1ER";

    const columns = [
        {
            // title: "Resources",
            resources: [
                {
                    name: "SellShirts",
                    link: "/SellShirts"
                },
                {
                    name: "ContactUs",
                    link: "/ContactUs"
                },
                {
                    name: "MyAccount",
                    link: "/MyAccount"
                },
                {
                    // name: "Admin",
                    // link: "/admin"
                }
            ]
        },
        {
            // title: "Legal",
            resources: [
                {
                    name: "Home",
                    link: "/"
                },
                {
                    name: "SignUp",
                    link: "/Sign_Up"
                },
                {
                    name: "Map",
                    link: "/"
                }
                       ]
        },
        {
            // title: "Visit",
            resources: [
                {
                //     name: "Locations",
                //     link: "/locations"
                // },
                // {
                //     name: "Culture",
                //     link: "/culture"
                }
                       ]
        }
    ]
        return <SimpleReactFooter
            description={description}
            title={title}
            columns={columns}
            twitter="twitter"
            facebook="profile.php?id=100004751140919"
            linkedin="fluffy_cat_on_linkedin"
            instagram="live"
            youtube="/"
            pinterest="/"
            copyright="REP1ER"
            iconColor="black"
            backgroundColor="bisque"
            fontColor="black"
            copyrightColor="darkgrey"
             />;

};
export default Footer1;