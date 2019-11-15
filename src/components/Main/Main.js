import React from 'react';
import './Main.scss';
import Axios from 'axios';
import Timestamp from 'react-timestamp';

class Main extends React.Component {
    state = {
        story: [],
        storyKids: []
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
        var hours = dateObj.getHours()

        return year + "/" + month + "/" + day + hours;
    }

    getId = () => {
        Axios.get(`${this.newStoriesUrl}`)
            .then(response => {
                const articleIds = response.data.slice(0, 50);
                const axiosRequests = articleIds.map(id => {
                    return this.getStory(id);
                });

                Axios.all(axiosRequests)
                    .then(responses => {
                        this.setState({
                            story: responses,
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
        console.log(this.state)
        return (
            <section className="main">
                {this.state.story.map((story) => {
                    return (
                        <article className="main__card" key={story.data.id}>
                            <span className="main__card-category">{story.data.type}</span>
                            <h2 className="main__card-title">{story.data.title}</h2>
                            <p className="main__card-a"><a className="main__card-link" href={story.data.url}>{story.data.url}</a></p>
                            <div className="main__card-details">
                                <span className="main__card-details-author">{story.data.score} points by: {story.data.by} . {story.data.descendants} comments</span>
                                <span className="main__card-details-time"><Timestamp relative date={story.data.time} /></span>
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