import React, { Component } from 'react';
import { MDCDialog } from '@material/dialog';
import { ArticleDialog } from './article-dialog';
import getNewsArticles from './getNewsArticle';
import './App.css';

const DEFAULT_IMAGE = 'https://fashionunited.info/global-assets/img/default/fu-default_1200x630_black-favicon.jpg';
//const BASE_URL = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
      currentArticle: null,
      variables: {
        offset: 0,
        limit: 10
      }
    };
  }


  async componentWillMount() {

    const result = await getNewsArticles(this.state.variables);

    this.setState({
      newsArticles: result.newsArticles,
      currentArticle: this.state.currentArticle,
      variables: this.state.variables
    });
  }

  newsArticles() {
    //console.log(this.state.newsArticles);
    return this.state.newsArticles.map((newsArticle, index) =>
      Object.values(newsArticle).filter((article) => {
        if (article == null) {
          return false;
        }
        article['slug'] = '/' + article.slug + '/' + article.id;
        return true;
      }).map((article, i) =>

        <div key={index + '-' + i} class='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
          <div class="mdc-card">
            <a class="mdc-card__primary-action" onClick={() => this.openDialog(article)}>
              <div class="mdc-card__media mdc-card__media--16-9"
                style={{ background: 'white url(' + (article.imageUrl || DEFAULT_IMAGE) + ') no-repeat center' }}>
              </div>
              <div class="demo-card__primary">
                <h4 class="demo-card__subtitle mdc-typography--subtitle2">{article.title}</h4>
              </div>
            </a>
            <div class="mdc-card__actions">
              <div class="mdc-card__action-icons">
                <a class="mdc-button mdc-button--outlined" href={article.url}>Read More</a>
              </div>
            </div>
            <span hidden={true} class='slug-url'>{article.slug}</span>
          </div>
        </div>

      )

    );

  }

  getMoreNews() {

    //console.log(this.state.newsArticles)

    let variables = this.state.variables;
    variables.offset = 0
    variables.limit = (this.state.variables.limit + 10)
    //console.log(variables);

    getNewsArticles(variables)
      .then((res) => {
        //console.log(res);
        this.setState({
          newsArticles: res.newsArticles,
          currentArticle: this.state.currentArticle,
          variables: variables
        });
      })
      .catch((err) => {
        //console.log(err);
        alert('Error loading more news')
      });

  }

  openDialog(article) {
    const dialog = new MDCDialog(document.querySelector('#mdc-dialog-article'));

    this.setState({
      newsArticles: this.state.newsArticles,
      currentArticle: article,
      variables: this.state.variables
    });

    dialog.show();
  }

  render() {
    return (
      <div className="App">
        <h1>Fashion News</h1>
        <div class="mdc-layout-grid mdc-layout-grid--align-right">
          <div class="mdc-layout-grid__inner">
            {this.newsArticles()}
          </div>
          <br />
          <button class="mdc-button mdc-button--raised" onClick={() => this.getMoreNews()}>Load More</button>
        </div>
        <ArticleDialog article={this.state.currentArticle || {}}></ArticleDialog>
      </div>

    );

  }

}

export default App;
