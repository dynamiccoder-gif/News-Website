import React, { Component } from 'react'
import PropTypes from 'prop-types'


import Box from './Box'
import './Home.css'

export default class Home extends Component {
  static defaultProps=
  {
    country:"in",
    category:"general"

  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      currentPage: 1,
      articlesPerPage: 8 
    }
    document.title=this.props.category+' - RK NEWS'
  }

async  componentDidMount()
  { 
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${import.meta.env.VITE_NEWS_API}`
    let data= await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles})


  }
  previousmove=()=> {
    if (this.state.currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1
      }));
    }
  }
    nextsmove=()=>{
      const { articles, currentPage, articlesPerPage } = this.state;
      const totalPages = Math.ceil(articles.length / articlesPerPage);
      if (currentPage < totalPages) {
        this.setState(prevState => ({
          currentPage: prevState.currentPage + 1
        }));
      }
    
    
  }
  render() {
    const { articles, currentPage, articlesPerPage } = this.state;
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
 const toatalpages=Math.ceil(articles.length / articlesPerPage);
    const displayedArticles = articles.slice(startIndex,endIndex); 
    return (
      <>
      <h2 className='heading'> Top News Headlines of  {this.props.category}</h2>
      <div className='boxes'>
        
      {displayedArticles.map((article, index) => (
       <div className='boxes' key={article.url}>
        <Box  title={article.title? article.title.slice(0,100):''} description={article.description ? article.description.slice(0, 100) :''} image={article.urlToImage} urls={article.url} date={article.publishedAt}/>
       </div>
     
        ))}
     </div>
     <div className='buttons'>
      <button disabled={currentPage === 1}  className="prevpage"  onClick={this.previousmove}> &larr; Prev-Page</button>
     <div>-{currentPage === toatalpages?"Last Page":currentPage}-</div>
      <button  disabled={currentPage === toatalpages }className='nextpage' onClick={this.nextsmove}> Next-Pagae &#8594;</button>
      </div>
     </>
    )
  }
}


