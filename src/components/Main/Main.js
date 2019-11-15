import React from 'react';
import './Main.scss';

class Main extends React.Component{
    render() {
        return(
            <section className="main">
                <article className="main__card">
                    <span className="main__card-category">Music</span>
                    <h2 className="main__card-title">The first line of Lorem Ipsum</h2>
                    <p className="main__card-description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero </p>
                </article>
                <article className="main__card">
                    <span className="main__card-category">Music</span>
                    <h2 className="main__card-title">The first line of Lorem Ipsum</h2>
                    <p className="main__card-description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero </p>
                </article>
            </section>
        );
    }
}
export default Main;