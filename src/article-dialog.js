import React, { Component } from "react";


export class ArticleDialog extends Component {

    render() {
        //console.log(this.props.article);
        return (

            <div id="mdc-dialog-article" class="mdc-dialog">
                <div class="mdc-dialog__surface">
                    <div class="mdc-dialog__header dialog__header__title">
                        {this.props.article.title}
                        {/* <img class="mdc-dialog__header__title" src={this.props.article.imageUrl} /> */}
                    </div>
                    <div class="mdc-dialog__body mdc-dialog__body--scrollable">
                        {/* <div class="demo-card__primary">
                            <h4 class="demo-card__subtitle">{this.props.article.title}</h4>
                        </div> */}
                        {/* <div class="demo-card__secondary"> */}
                        {this.props.article.description}
                        {/* </div> */}
                    </div>
                    <footer class="mdc-dialog__footer">
                        <button type="button" class="mdc-button mdc-button--unelevated mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Close</button>
                    </footer>
                </div>
                <div class="mdc-dialog__backdrop"></div>
            </div>

        );
    }
}