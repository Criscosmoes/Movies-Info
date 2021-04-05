import React, {useEffect} from 'react'; 
import '../App.css'; 

import NavBar from './NavBar';
import HomePage from './HomePage';
import Search from './Search';
import WatchTrailerv2 from './WatchTrailerv2';
import Footer from './Footer';

import { Switch, Route } from 'react-router-dom'; 


import { fetchMovies } from './../actions/index';
import { connect } from 'react-redux'; 





const App = ({movies, fetchMovies}) => {


    useEffect(() => {

       fetchMovies('top rated', 'movie/top_rated'); 
       fetchMovies('trending', 'trending/all/week'); 
       fetchMovies('trendingToday', 'trending/all/day')
       fetchMovies('popular', 'movie/popular'); 
       fetchMovies('now_playing', 'movie/now_playing'); 
       fetchMovies('upcoming', 'movie/upcoming')


    }, [fetchMovies])

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <NavBar /> 
                    {<HomePage trending={movies.trending} topRated={movies.topRated} trendingToday={movies.trendingToday} />}
                    <Footer />
                </Route>

                <Route path="/popular" >
                    <NavBar /> 
                    <Search movies={movies.popular} />
                    <Footer />
                </Route>

                <Route path="/now_playing" >
                    <NavBar /> 
                    <Search movies={movies.now_playing} />
                    <Footer />
                    
                </Route>

                <Route path="/upcoming" >
                    <NavBar /> 
                    <Search movies={movies.upcoming} />
                    <Footer />
                </Route>

                <Route path="/movie/:id">
                    <NavBar /> 
                    <WatchTrailerv2 />
                    <Footer />
                </Route>

                <Route path="/search/:search">
                    <NavBar /> 
                    <Search movies={movies.search} />
                    <Footer /> 
                    
                </Route>
            </Switch>
        </div>
    )
}


const mapStateToProps = state => {

    return { 
        movies: state.movies, 
    }
}


export default connect(mapStateToProps, { fetchMovies })(App); 