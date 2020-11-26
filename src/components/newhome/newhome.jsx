import './newhome.css';
import React from 'react';

class Flexhome extends React.Component {
    render() {
        return (
            <>
                <body>
                    <header class="headerContainer">
                        <h1>Exclusive Articles</h1>
                    </header>
                    <div class="mainContainer">
                        <section class="mainContentItem">
                            <article>
                                <h2>Bihar Election Results 2020</h2>
                                <p>The counting of votes for 243 assembly constituencies in Bihar is under way.
                                The closely fought elections saw incumbent Nitish Kumar, who is heading the JD(U)-BJP combine,
                                take on the Tejashwi Yadav-led Mahagathbandhan comprising RJD, Congress and Left Parties.
                                As per the current trends, the NDA has pulled ahead of the Grand Alliance
                                with several rounds of voting still left. Stay with TOI for live updates and constituency-wise
                    results</p>
                            </article>
                            <article>
                                <h2>IPL 2020 Final</h2>
                                <p>A mouth-watering clash is on the cards as the defending champions Mumbai Indians (MI) take on the
                                first-time finalists Delhi Capitals (DC) in the summit clash
                                of the Dream11 Indian Premier League (IPL) 2020 at the Dubai International Cricket Stadium on
                    Tuesday.</p>
                            </article>
                            <article>
                                <h2>US Elections 2020</h2>
                                <p> Joe Biden was elected the 46th president of the US,
                                pledging to tackle the pandemic and restore the soul of America in a victory
                                that signalled the end of one of the most tumultuous periods in the country’s history.
                                </p>
                            </article>
                        </section>
                        <sidebar class="sideBarItem leftSideBarItem">
                            <div class="center">
                                <p>Left Side Bar</p>
                            </div>
                        </sidebar>
                        <sidebar class="sideBarItem rightSideBarItem">
                            <div class="center">
                                <p>Right Side Bar</p>
                            </div>
                        </sidebar>
                    </div>
                    <footer class="footerContainer">
                        <p>Visit Website To Read More <a href="https://www.telegraphindia.com/">Telegrapgh India</a></p>
                    </footer>
                </body>
            </>
        );
    }
}

export default Flexhome;