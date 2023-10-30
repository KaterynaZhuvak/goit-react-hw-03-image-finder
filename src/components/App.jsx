import React, { Component } from 'react';
import axios from 'axios';

import { SearchBar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    images: null,
    input: null,
    totalImages: null,
    isLoading: false,
    error: null,
    currentPage: 1,
    modalImage: null,
    modal: {
      isOpen: false,
      modalData: null,
    },
  };

  fetchImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${this.state.input}&page=${this.state.currentPage}&key=39488984-2cdf64825ff5a66680c809fac&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({
        images: data.hits,
        totalImages: data.totalHits,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = value => {
    this.setState({ input: value }, () => {
      this.fetchImages();
    });
  };

  onClick = page => {
    this.setState({ currentPage: page });
    
    
  };

  componentDidUpdate(_, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.fetchImages();
      const newImages = this.state.images;
      
      this.setState({
        images: [...prevState.images, ...newImages],
      });
    }
  }

  openModal = imageImg => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: imageImg,
      },
    });
  };

  closeModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalData: null,
      },
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loader />}
        {this.state.error !== null && (
          <p className="error-bage">
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.totalImages > 12 && <Button onClick={this.onClick} />}
        {this.state.modal.isOpen && <Modal currentImg={this.state.modal.modalData } closeModal={this.closeModal} />}
      </div>
    );
  }
}
