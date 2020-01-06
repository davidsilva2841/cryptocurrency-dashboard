import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';



export default class News extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [{
                "id": "6693860",
                "guid": "https://www.coinspeaker.com/?p=102203",
                "published_on": 1578318742,
                "imageurl": "https://images.cryptocompare.com/news/coinspeaker/egM6gy450A1.jpeg",
                "title": "Turkey’s Capital Markets Board Will Put Pressure on Bitcoin",
                "url": "https://www.coinspeaker.com/turkey-capital-markets-bitcoin/",
                "source": "coinspeaker",
                "body": "Coinspeaker Turkey&#8217;s Capital Markets Board Will Put Pressure on BitcoinLocal businesses and officials keep asking the highest powers of Turkey whether they will legalize the use of cryptocurrency. The CMB finally gives its answers, and they're not very optimistic.Turkey&#8217;s Capital Markets Board Will Put Pressure on Bitcoin",
                "tags": "Altcoins|Bitcoin (BTC)|Cryptocurrency News|News|Regulation|Society|bitcoin|capital markets board|localbitcoins",
                "categories": "BTC|Market|Regulation|Altcoin",
                "upvotes": "0",
                "downvotes": "0",
                "lang": "EN",
                "source_info": {
                    "name": "CoinSpeaker",
                    "lang": "EN",
                    "img": "https://images.cryptocompare.com/news/default/coinspeaker.png"
                }
            }]
        };
    }
    componentDidMount () {
        let { cryptoAPI } = this.props;
        cryptoAPI.getNews()
            .then(result => {
                console.log(`FILE: News.jsx componentDidMount() | result: \n`, result);
                this.setState({data: result.data.Data});
            })
            .catch(error => {
                console.error(`FILE: News.jsx componentDidMount() | ERROR: \n`, error);
            });
    }
    
    getNews (news) {
        //            <div className="card" key={`news-card-${news.id}`}>
        //                 <img src={news.imageurl} alt=""/>
        //                 <p>
        //                     <a href={news.url}>{news.title}</a>
        //                 </p>
        //             </div>
        return (
            <MDBCol >
                <MDBCard>
                    <MDBCardImage
                        className="img-fluid"
                        src={news.imageurl}
                        
                    />
                    <MDBCardBody>
                        <MDBCardTitle><a href={news.url}>{news.title}</a></MDBCardTitle>
                        <MDBCardText>{news.body}</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
    
    render() {
        let {data} = this.state;
        return (
            <div className="module news">
                {data.map(data => this.getNews(data))}
            </div>
        );
    }
}
    
    
