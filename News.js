import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
   
    constructor()
    {
        super();
       this.state={articles:[],loading:false,page:1};//present state 
     //  console.log(this.article);
    }

    async componentDidMount()
{
  
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryname}&category=${this.props.categoryname}&apiKey=c297dafc923a4664b5ce1eb09a730962&page=1`;
    let data=await fetch(url);//here data is respone ,await here means it wait for promise
    let codata=await data.json();//here we have used promises //${} insert variable in string 
    //console.log(codata);
    this.setState({articles:codata.articles});
    
}
  previous=async ()=>
  {
     // console.log("previous");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryname}&category=${this.props.categoryname}&apiKey=c297dafc923a4664b5ce1eb09a730962&page=${this.state.page-1}`;
    let data=await fetch(url);//here data is respone ,await here means it wait for promise
    let codata=await data.json();
      this.setState({page:this.state.page-1,
        articles:codata.articles
    });
  }

  next= async()=>
  {
     // console.log("next");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.countryname}&category=${this.props.categoryname}&apiKey=c297dafc923a4664b5ce1eb09a730962&page=${this.state.page+1}`;
    let data=await fetch(url);//here data is respone ,await here means it wait for promise
    let codata=await data.json();
      this.setState({page:this.state.page+1,
        articles:codata.articles
    });
   }
    render() {
        return (
            <div className="container my-4">
              <br/><br/>  <h2 className="text-center py-2">Trending News on {this.props.categoryname}</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                   return  <div className="col-md-4" key={element.url}>
            <NewsItem  /*newsdate={element.publishedAt} */readmore={element.url} title={element.title} desc={element.description} imageurl={element.urlToImage}/>
                    </div>}
                    )}
                </div>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-2 float-left" onClick={this.previous}>Previous</button>
                <button disabled={this.state.page>=2} type="button" className="btn btn-dark my-2 float-right" onClick={this.next}>Next</button>
            </div>
            
        )
    }
}

 ///when we use props in class based components it is used as this.props.nameofit
//we have to use jsx fragment whenever we have to use javascript in html  code 

export default News
