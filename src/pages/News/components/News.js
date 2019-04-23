import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../../actions/newsActions';
import NewsItem from './NewsItem';
import Loading from './Loading';
import Error from './Error';

class News extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         pageIsEmpty: true
    //     }
    // }

    componentWillMount() {
        const { pageIsEmpty } = this.props;
        // const newsItemsList = document.querySelector('#news-items-list');
        // console.log('selector ', newsItemsList);
        pageIsEmpty && this.props.fetchNews();
        //pageIsEmpty && this.setState({pageIsEmpty: false});
        //console.log('fetchNews was sent ', pageIsEmpty);
    }

    render() {

        const { news, isLoading, error } = this.props;
        const newsItems = news && news
            .map(
                (newsItem, index) => <NewsItem key={index} newsItem={newsItem}/>
            );

        return (
            <div className="page-content">
                {isLoading ? <Loading/> : error ? <Error errorMsg={error} /> :
                    <span id="news-items-list">{ newsItems }</span>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    news: state.newsData.news,
    isLoading: state.newsData.isLoading,
    error: state.newsData.error,
    pageIsEmpty: state.newsData.pageIsEmpty,
    //console.log('in mapStateToProps', state.newsData)  //array is empty, but full in reducer action.payload
});

const mapDispatchToProps = dispatch => {
    //console.log(dispatch, typeof fetchNews());
    return {
        fetchNews: () => dispatch(fetchNews())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);