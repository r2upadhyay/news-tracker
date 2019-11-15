import React from 'react';
import './Main.scss';
import Axios from 'axios';
import Moment from 'react-moment';

class Main extends React.Component {
    state = {
        story: [],
    }

    baseUrl = 'https://hacker-news.firebaseio.com/v0';
    newStoriesUrl = `${this.baseUrl}/topstories.json`;
    storyUrl = `${this.baseUrl}/item`;

    //to convert the timestamp to actual date
    getTheDate(dataObj) {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate;
        return newdate = year + "/" + month + "/" + day;
    }

    getId = () => {
        Axios.get(`${this.newStoriesUrl}`)
            .then(response => {
                const arrayLength = response.data.length;
                const articleIds = response.data.slice(0, 10);
                const axiosRequests = articleIds.map(id => {
                    return this.getStory(id);
                });

                Axios.all(axiosRequests)
                    .then(responses => {
                        this.setState({
                            story: responses
                        })
                    })
            })
    }
    getStory = (storyId) => {
        return Axios.get(`${this.storyUrl}/${storyId}.json`)
    }

    componentDidMount() {
        this.getId();
    }

    render() {
        return (
            <section className="main">
                {this.state.story.map((story) => {
                    return (
                        <article className="main__card">
                            <span className="main__card-category">{story.data.type}</span>
                            <h2 className="main__card-title">{story.data.title}</h2>
                            <p className="main__card-description">{story.data.text}The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero </p>
                            <div className="main__card-details">
                                <span className="main__card-details-author">By: {story.data.by}</span>
                                <span className="main__card-details-time">{this.getTheDate(story.data.time)}</span>
                            </div>
                        </article>
                    )
                })
                }
            </section>
        );
    }
}
export default Main;