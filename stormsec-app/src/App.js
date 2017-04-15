import React, { Component } from 'react';
import thumbnail from './img/thumbnail.jpg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {  
        videos: [
          { nome: 'Video 1', url: 'http://homolog.aido.com.br/player/system-of-a-down-chop-suey.mp4' },
          { nome: 'Video 2', url: 'http://homolog.aido.com.br/player/gunsndoses-novemberrain.mp4' },
          { nome: 'Video 3', url: 'http://homolog.aido.com.br/player/system-of-a-down-chop-suey.mp4' },
          { nome: 'Video 4', url: 'http://homolog.aido.com.br/player/gunsndoses-novemberrain.mp4' }
        ],
        selected: "exemplo1",
        videoSelected: "http://homolog.aido.com.br/player/system-of-a-down-chop-suey.mp4"
    };
    this.isActive = this.isActive.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.togglePlaylist = this.togglePlaylist.bind(this);
    this.isActivePlaylist = this.isActivePlaylist.bind(this);
  }


  setFilter(filter) {
    
    this.setState({selected  : filter})

    switch(filter) {
      case "exemplo1":
        this.setState({videoSelected: this.state.videos[0].url})
        break;
      case "exemplo2":
        this.setState({videoSelected: this.state.videos[1].url})
        break;
      case "exemplo3":
        this.setState({videoSelected: this.state.videos[2].url})
        break;
      case "exemplo4":
        this.setState({videoSelected: this.state.videos[3].url})
        break;
      default:
        console.log("Nenhum video selecionado.");
    }

  }

  isActive(value) {
    return 'list-item ' + ( (value === this.state.selected) ?'active':'default');
  }

  togglePlaylist() {
    if ( this.state.playlistIsActive === 'show' || this.state.playlistIsActive === undefined ) {
      this.setState({playlistIsActive: "hide"})
    } else {
      this.setState({playlistIsActive: "show"})
    }
  }

  isActivePlaylist(value) {
    return 'player-playlist ' + ( (this.state.playlistIsActive === "hide") ?'hide':'show');
  }

  render() {
    return (
      <div className="container">
        <div className="player">

          <button className="playlist-toggle" onClick={this.togglePlaylist.bind(this)} type="button">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div className={this.isActivePlaylist()}>
            <ul className="list">
              <li className={this.isActive('exemplo1')} onClick={this.setFilter.bind(this, 'exemplo1')}>
                <button className="list-button"><img src={thumbnail} alt=""/></button>
              </li>
              <li className={this.isActive('exemplo2')} onClick={this.setFilter.bind(this, 'exemplo2')}>
                <button className="list-button"><img src={thumbnail} alt=""/></button>
              </li>
              <li className={this.isActive('exemplo3')} onClick={this.setFilter.bind(this, 'exemplo3')}>
                <button className="list-button"><img src={thumbnail} alt=""/></button>
              </li>
              <li className={this.isActive('exemplo4')} onClick={this.setFilter.bind(this, 'exemplo4')}>
                <button className="list-button"><img src={thumbnail} alt=""/></button>
              </li>
            </ul>
          </div>

          <video controls autoPlay className="player-video" src={this.state.videoSelected}>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>

        </div>
      </div>
    );
  }
}

export default App;
