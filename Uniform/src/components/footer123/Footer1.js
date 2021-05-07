import SimpleReactFooter from "simple-react-footer";

function Footer1() {

    const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
  

    const title = "REP1ER";

    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact",
                    link: "/ContactUs"
                },
                {
                    name: "Admin",
                    link: "/admin"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
                       ]
        },
        {
            title: "Visit",
            resources: [
                {
                    name: "Locations",
                    link: "/locations"
                },
                {
                    name: "Culture",
                    link: "/culture"
                }
                       ]
        }
    ]
        return <SimpleReactFooter
            description={description}
            title={title}
            columns={columns}
            linkedin="fluffy_cat_on_linkedin"
            facebook="profile.php?id=100004751140919"
            twitter="twitter"
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