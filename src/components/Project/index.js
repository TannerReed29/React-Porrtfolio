import React from "react";
import { Link } from "react-router-dom"



import GoGo from "../../assets/GoGo.jpg";
import BrewMe from "../../assets/BrewMe.jpg";
import PawWalkers from "../../assets/PawWalkers.jpg";
import BudgetTracker from "../../assets/BudgetTracker.jpg";
import TechBlog from "../../assets/TechBlog.jpg";
import SocialNetworkAPI from "../../assets/SocialNetwork.jpg";
import NoteTaker from "../../assets/NoteTaker.jpg";


// WOULD LIKE TO SET THIS UP TO GITHUB API TO POST ALL MY GITHUB PROJECTS WITH DATA RECEIVED

// ADD MORE PROJECTS
// NEED TO MAKE CARDS LOOK BETTER WITH MORE DATA 


function Project() {

    return (
        <section className="project pb-10">
            <div className="d-grid gap-2 col-6 mx-auto">
            <Link className='btn btn-danger' to="/passwordgen">Password Generator</Link>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
                {/* GoGoGomez, any new Projects to add just copy the card */}
                <div className="col">
                    <div className="card">
                        <img src={GoGo} alt="gogogomez" className="card-img-top" />
                        <div className="card-title"><h3>GoGoGomez</h3></div>
                        <div class="card-body">
                            <a href="https://github.com/chellesjord/gogogomez" target="blank" rel="noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://shrouded-journey-40287.herokuapp.com/" target="blank" rel="noreferrer">
                                <button>Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>




                <div className="col">
                    <div className="card">
                        <img src={BrewMe} alt="brewMe" className="card-img-top" />
                        <div className="card-title"><h3>BrewMe</h3></div>
                        <div class="card-body">
                            <a href="https://github.com/jessebubble/brew-me" target="blank" rel="noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://jessebubble.github.io/brew-me/" target="blank" rel="noreferrer">
                                <button>Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <img src={PawWalkers} alt="pawWalkers" className="card-img-top" />
                        <div className="card-title"><h3>Paw Walkers</h3></div>
                        <div className="card-body">
                            <a href="https://github.com/iyanez2314/dog-walkers" target="blank" rel="noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://iyanez2314-dogwalking.herokuapp.com/" target="blank" rel="noreferrer">
                                <button>Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <img src={BudgetTracker} alt="budgetTracker" className="card-img-top" />
                        <div className="card-title"><h3>PWA Budget Tracker</h3></div>
                        <div class="card-body">
                            <a href="https://github.com/TannerReed29/PWA-Budget-Tracker" target="blank" rel="noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://tannerreed29-budget-tracker.herokuapp.com/" target="blank" rel="noreferrer">
                                <button>Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <img src={TechBlog} alt="techBlog" className="card-img-top" />
                        <div className="card-title"><h3>MVC Tech Blog</h3></div>
                        <div className="card-body">
                            <a href="https://github.com/TannerReed29/MVC-Tech-Blog" target="blank" rel="noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://tannerreed29tech-blog.herokuapp.com/" target="blank" rel="noreferrer">
                                <button>Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <img src={SocialNetworkAPI} alt="socialNetwork" className="card-img-top" />
                        <div className="card-title"><h3>Social Network API</h3></div>
                        <div className="card-body">
                            <a href="https://github.com/TannerReed29/Social-Network-API" target="blank" rel="noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://drive.google.com/file/d/1aXsVFrpeP7DhjcjFSUlarkyt69d2w4Iy/view" target="blank" rel="noreferrer">
                                <button>Video Demo</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <img src={NoteTaker} alt="noteTaker" className="card-img-top" />
                        <div className="card-title"><h3>Note Taker</h3></div>
                        <div className="card-body">
                            <a href="https://github.com/TannerReed29/Note-Taker" target="blank" rel="noreferrer">
                                <button>Github</button>
                            </a>
                            <a href="https://note-taker-tannerreed29.herokuapp.com/" target="blank" rel="noreferrer">
                                <button>Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            
            
            
            
            </div>
        </section>
    );
}


export default Project;