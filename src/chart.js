import React from "react";

const Chart = (props) => {
    const data = props.data;
    console.log(data);
    const label = data.label;
    const confidence = parseFloat(data.confidence.toFixed(2));
    const itemContent = {
        "Class 1- PETE": {
            message: "Yes, you can recycle PETE plastics! A lot of these can actually be recycled into fashion items, such as clothes and backpacks.",
            recycle: "yes",
            image: "../public/images/" + label + ".png",
            // link: ""
        },
        "Class 2- HDPE": {
            message: "Yes, you can reycle HDPE plastics!",
            recycle: "yes",
            image: "../public/images/" + label + ".png",
            // link: ""
        },
        "Class 3- PVC": {
            message: "Unfortunately, you cannot recycle PVC plastics in most areas.",
            recycle: "no",
            image: "../public/images/" + label + ".png",
            // link: ""
        },
        "Class 4- LDPE": {
            message: "LDPE is NOT recyclable in your normal curbside pickup. Check your local grocery stores for plastic bag/film collection centers instead!",
            recycle: "other",
            image: "../public/images/" + label + ".png",
            // link: ""
        },
        "Class 5- PP": {
            message: "Most recycling facilities cannot recycle polypropene products (it gets stuck in the machine). Instead, look for local Polypropylene Collection Receptacles!",
            recycle: "other",
            image: "../public/images/" + label + ".png",
            // link: ""
        },
        "Class 6- PS": {
            message: "You cannot put styrofoam into you recycling bin, but ",
            recycle: "other",
            image: "../public/images/" + label + ".png",
            link: "https://search.earth911.com/?what=polystyrene&where=zip+code&list_filter=all&max_distance=25&family_id=&latitude=&longitude=&country=&province=&city=&sponsor="
        },
        "Class 7- OTHER": {
            message: "This doesn't seem to be a plastic. Try checking your local recycling guidelines. (Think we made a mistake? Submit a photo of your plastic with its label to help us improve!)",
            recycle: "other",
            image: "../public/images/" + label + ".png",
            link: "https://how2recycle.info/check-locally"
        },
        "Class 8- MULTILAYER": {
            message: "No, these are not recyclable. (The different plastics would have to be separated; not currently supported).",
            recycle: "no",
            image: "../public/images/" + label + ".png",
            link: "https://www.science.org/doi/10.1126/sciadv.aba7599#:~:text=However%2C%20multilayer%20packaging%20materials%20cannot,incompatibility%20of%20the%20different%20layers."
        }
    };
    return (
        <div>
            <div className="center1">
                <h3 color="black">Plastic Category: {label}</h3>
                <h4 color="black">With {confidence * 100}% confidence</h4>
                <script type="text/javascript">document.getElementById('image').src = {itemContent[label].image};</script>
                <p className="message">{itemContent[label].message}</p>
                {itemContent[label].link ? <a href={itemContent[label].link} target="_blank" rel="noreferrer">Link for more information on where to dispose of this plastic type!</a> : <p></p>}
            </div>
        </div>
    );
};
export default Chart;
