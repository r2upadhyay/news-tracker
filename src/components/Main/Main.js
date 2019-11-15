import React from 'react';
import './Main.scss';
import Axios from 'axios';
import Moment from 'react-moment';

class Main extends React.Component {
    state = {
        story: [],
    }

    baseUrl = 'https://hacker-news.firebaseio.com/v0';
    newStoriesUrl = `${this.baseUrl}/newstories.json`;
    storyUrl = `${this.baseUrl}/item`;

    getId = () => {
        Axios.get(`${this.newStoriesUrl}`)
            .then(response => {
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
        console.log(this.state);

        return (
            <section className="main">
                {this.state.story.map((story) => {
                    return(
                        <article className="main__card">
                            <span className="main__card-category">Music</span>
                            <h2 className="main__card-title">{story.data.title}</h2>
                            <p className="main__card-description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero </p>
                            <span className="main__card-author">By {story.data.by}</span>
                            <span className="main__card-time"><Moment format="YYYY/MM/DD">{story.data.time}</Moment></span>
                        </article>
                    )
                })
            }
            </section>
        );
    }
}
export default Main;