import React, { Component } from 'react';

import axios from 'axios';

import css from './App.module.css';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    input: '',
    totalImages: null,
    isLoading: false,
    error: null,
    currentPage: 1,
    modalImage: null,
    modal: {
      isOpen: false,
      modalData: {
          largeImage: null,
          alt: null,
        }
    },
  };

  fetchImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${this.state.input}&page=${this.state.currentPage}&key=39488984-2cdf64825ff5a66680c809fac&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        totalImages: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = value => {
    this.setState(
      {
        input: value,
        images: [],
        currentPage: 1,
      },
      () => {}
    );
  };

  onClick = page => {
    this.setState({ currentPage: page });
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.currentPage !== prevState.currentPage ||
      this.state.input !== prevState.input
    ) {
      this.fetchImages();
    }
  }

  openModal = (imageImg, tags) => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: {
          largeImage: imageImg,
          alt: tags,
        }
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
      <div className={css.container}>
        <div className={css.wrapper}>
          <SearchBar onSubmit={this.onSubmit} />
        </div>
        {this.state.isLoading && <Loader />}
        {this.state.error !== null && (
          <p className="error-bage">
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.totalImages > 12 && <Button onClick={this.onClick} />}
        {this.state.modal.isOpen && (
          <Modal
            currentImg={this.state.modal.modalData.largeImage}
            alt={this.state.modal.modalData.alt}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
